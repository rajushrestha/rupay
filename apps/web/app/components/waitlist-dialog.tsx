"use client";

import { Button } from "@workspace/ui/components/button";
import { ChevronRightIcon } from "lucide-react";
import { Input } from "@workspace/ui/components/input";
import { useState, useEffect } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@workspace/ui/components/dialog";
import { cn } from "@workspace/ui/lib/utils";

export function WaitlistDialog() {
	const [waitlistOpen, setWaitlistOpen] = useState(false);
	const [email, setEmail] = useState("");
	const [count, setCount] = useState<number | null>(null);
	const [status, setStatus] = useState<
		"idle" | "submitting" | "success" | "error"
	>("idle");
	const [message, setMessage] = useState("");

	useEffect(() => {
		fetch("/api/waitlist")
			.then((res) => res.json())
			.then((d: { count?: number }) => {
				if (typeof d?.count === "number") setCount(d.count);
			})
			.catch(() => {});
	}, []);

	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			setStatus("error");
			setMessage("Please enter a valid email address.");
			return;
		}

		setStatus("submitting");
		setMessage("");

		try {
			const res = await fetch("/api/waitlist", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email }),
			});

			const data = await res.json();

			if (!res.ok) {
				throw new Error(data.error || "Failed to join waitlist");
			}

			setStatus("success");
			setMessage("You're on the list! 🎉");
			setEmail("");

			if (typeof data?.count === "number") setCount(data.count);
		} catch (e: unknown) {
			setStatus("error");
			const messageFromError =
				e &&
				typeof e === "object" &&
				"message" in e &&
				typeof (e as { message?: string }).message === "string"
					? (e as { message: string }).message
					: "Something went wrong. Please try again.";
			setMessage(messageFromError);
			console.error("Join waitlist failed", e);
		}
	}

	return (
		<Dialog open={waitlistOpen} onOpenChange={setWaitlistOpen}>
			<DialogTrigger asChild>
				<Button size="xl">
					<span>Get Early Access</span>
					<ChevronRightIcon />
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle className="text-2xl">Join the Waitlist</DialogTitle>
					<DialogDescription className="text-md text-muted-foreground">
						Be among the first to experience Rupay. We&apos;ll notify you when
						we launch.
					</DialogDescription>
				</DialogHeader>
				<div className="space-y-4 pt-4">
					<form
						onSubmit={onSubmit}
						className="mx-auto w-full grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 text-left"
					>
						<Input
							type="email"
							name="email"
							placeholder="you@company.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							disabled={status === "submitting"}
							autoComplete="off"
							className="rounded-full px-4"
						/>
						<Button
							type="submit"
							className="sm:self-stretch"
							disabled={status === "submitting"}
						>
							{status === "submitting" ? "Joining…" : "Join Waitlist"}
						</Button>
						{message && status !== "success" && (
							<div
								className={cn(
									"sm:col-span-2 text-sm text-center",
									status === "error"
										? "text-destructive"
										: "text-muted-foreground",
								)}
								role={status === "error" ? "alert" : undefined}
							>
								{message}
							</div>
						)}
					</form>
					<div className="flex items-center justify-center gap-3 flex-wrap">
						<div className="flex -space-x-2.5">
							<div className="w-8 h-8 rounded-full bg-blue-700 border-2 border-white flex items-center justify-center text-white text-xs font-medium">
								M
							</div>
							<div className="w-8 h-8 rounded-full bg-emerald-700 border-2 border-white flex items-center justify-center text-white text-xs font-medium">
								B
							</div>
							<div className="w-8 h-8 rounded-full bg-purple-700 border-2 border-white flex items-center justify-center text-white text-xs font-medium">
								S
							</div>
						</div>
						<span className="text-slate-600 text-sm dark:text-slate-400">
							{typeof count === "number" ? count : "…"} people already joined.
						</span>
						{status === "success" && message && (
							<span className="text-emerald-600 text-sm -ms-1 dark:text-emerald-500">
								{message}
							</span>
						)}
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
