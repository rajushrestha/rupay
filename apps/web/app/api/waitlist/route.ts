import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

async function d1Query(sql: string, params?: unknown[]) {
	const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
	const databaseId = process.env.CLOUDFLARE_DATABASE_ID;
	const apiToken = process.env.CLOUDFLARE_DATABASE_API_TOKEN;

	if (!accountId || !databaseId || !apiToken) {
		throw new Error("Cloudflare credentials not configured");
	}

	const url = `https://api.cloudflare.com/client/v4/accounts/${accountId}/d1/database/${databaseId}/query`;

	const res = await fetch(url, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${apiToken}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ sql, params }),
	});

	const data: {
		success?: boolean;
		result?: Array<{ results?: Array<Record<string, unknown>> }>;
		errors?: Array<{ message?: string }>;
	} = await res.json();

	if (!res.ok || data?.success !== true) {
		throw new Error(data?.errors?.[0]?.message || "D1 query failed");
	}

	return data;
}

export async function GET() {
	try {
		const countRes = await d1Query("SELECT COUNT(*) AS c FROM waitlist;");
		const count = Number(countRes.result?.[0]?.results?.[0]?.c ?? 0);
		return NextResponse.json({ count });
	} catch (error) {
		console.error("Get waitlist count failed", error);
		return NextResponse.json(
			{ error: "Failed to get waitlist count" },
			{ status: 500 }
		);
	}
}

const joinWaitlistSchema = z.object({
	email: z.string().email(),
});

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { email } = joinWaitlistSchema.parse(body);

		const emailLower = email.trim().toLowerCase();

		// Extract client info from headers
		const headers = request.headers;
		const userAgentRaw =
			headers.get("User-Agent") || headers.get("user-agent") || "";
		const userAgent = userAgentRaw ? userAgentRaw.slice(0, 512) : null;

		// Per Cloudflare docs, prefer CF-Connecting-IP and CF-IPCountry
		const cfConnectingIp =
			headers.get("CF-Connecting-IP") || headers.get("cf-connecting-ip");
		const xForwardedFor =
			headers.get("X-Forwarded-For") || headers.get("x-forwarded-for");
		const xRealIp = headers.get("X-Real-Ip") || headers.get("x-real-ip");

		const ipCandidate =
			cfConnectingIp ||
			(xForwardedFor ? xForwardedFor.split(",")[0] : undefined) ||
			xRealIp ||
			undefined;

		const ip = ipCandidate ? ipCandidate.trim() : null;

		const cfCountry =
			headers.get("CF-IPCountry") || headers.get("cf-ipcountry") || undefined;

		const reqCountry = (request as unknown as { cf?: { country?: string } })?.cf
			?.country;

		const country = (cfCountry || reqCountry || undefined) ?? null;

		// Optional debug surface for live troubleshooting (enable with DEBUG_HEADERS=1)
		const includeDebug = process.env.DEBUG_HEADERS === "1";

		const debugPayload = includeDebug
			? {
					resolved: { ip, country, userAgent },
					headersPresent: {
						CFConnectingIP: Boolean(
							headers.get("CF-Connecting-IP") ||
								headers.get("cf-connecting-ip")
						),
						CFIPCountry: Boolean(
							headers.get("CF-IPCountry") || headers.get("cf-ipcountry")
						),
						XForwardedFor: Boolean(
							headers.get("X-Forwarded-For") || headers.get("x-forwarded-for")
						),
						XRealIp: Boolean(
							headers.get("X-Real-Ip") || headers.get("x-real-ip")
						),
						UserAgent: Boolean(userAgent),
					},
					cf:
						(request as unknown as { cf?: Record<string, unknown> })?.cf ??
						null,
				}
			: undefined;

		// Insert with additional metadata (ignore duplicates by email)
		await d1Query(
			"INSERT OR IGNORE INTO waitlist (email, ip, user_agent, country) VALUES (?, ?, ?, ?);",
			[emailLower, ip ?? null, userAgent ?? null, country ?? null]
		);

		const countRes = await d1Query("SELECT COUNT(*) AS c FROM waitlist;");
		const count = Number(countRes.result?.[0]?.results?.[0]?.c ?? 0);

		return NextResponse.json(
			includeDebug
				? { ok: true, count, debug: debugPayload }
				: { ok: true, count }
		);
	} catch (error) {
		console.error("Join waitlist failed", error);

		if (error instanceof z.ZodError) {
			return NextResponse.json(
				{ error: "Invalid email address" },
				{ status: 400 }
			);
		}

		const messageFromError =
			error &&
			typeof error === "object" &&
			"message" in error &&
			typeof (error as { message?: string }).message === "string"
				? (error as { message: string }).message
				: "Something went wrong. Please try again.";

		return NextResponse.json({ error: messageFromError }, { status: 500 });
	}
}
