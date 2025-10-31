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
	title: "Rupay",
	description: "Rupay is a platform for monetizing your software.",
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
