import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@workspace/ui/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "Rupay | Accept Global Payments as a Nepalese Developer",
		template: "%s | Rupay",
	},
	description:
		"Rupay enables Nepalese developers to accept global payments and monetize their software worldwide. Built on Stripe for regions where Stripe isn't supported. Comprehensive payment platform with merchant of record services.",
	keywords: [
		"Rupay",
		"Nepal payments",
		"global payments",
		"Stripe alternative",
		"merchant of record",
		"Nepalese developers",
		"payment processing",
		"subscription billing",
		"software monetization",
	],
	authors: [{ name: "Rupay" }],
	creator: "Rupay",
	publisher: "Rupay",
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_SITE_URL || "https://rupay.dev",
	),
	icons: {
		icon: [
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			{ url: "/favicon.ico", sizes: "any" },
		],
		shortcut: "/favicon.ico",
		apple: "/favicon-32x32.png",
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		siteName: "Rupay",
	},
	twitter: {
		card: "summary_large_image",
		creator: "@rupay",
	},
	robots: {
		index: true,
		follow: true,
	},
};

const googleAnalyticsId = process.env.GOOGLE_TAG_MANAGER_ID;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<div className="h-full bg-muted">
					<div className="relative flex flex-col px-0 md:w-full md:flex-1 md:items-center md:px-4">
						{children}
					</div>
				</div>
			</body>
			<GoogleAnalytics gaId={googleAnalyticsId as string} />
		</html>
	);
}
