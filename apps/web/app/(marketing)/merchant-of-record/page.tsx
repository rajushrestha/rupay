import { Header } from "@/app/components/layout/header";
import { Footer } from "@/app/components/layout/footer";
import { HeroSection } from "./components/hero-section";
import { ContentSections } from "./components/content-sections";
import { CtaSection } from "./components/cta-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Rupay as Merchant of Record | Handle Global Tax Compliance",
	description:
		"Rupay acts as your Merchant of Record, handling all international sales tax compliance, VAT, GST, and sales tax requirements globally. Perfect for Nepalese developers who want to sell worldwide without navigating complex tax regulations.",
	alternates: {
		canonical: "/merchant-of-record",
	},
	openGraph: {
		title: "Rupay as Merchant of Record | Handle Global Tax Compliance",
		description:
			"Rupay acts as your Merchant of Record, handling all international sales tax compliance, VAT, GST, and sales tax requirements globally.",
		type: "article",
		locale: "en_US",
		siteName: "Rupay",
		url: "/merchant-of-record",
		publishedTime: "2025-01-01T00:00:00Z",
		modifiedTime: new Date().toISOString(),
	},
	twitter: {
		card: "summary_large_image",
		title: "Rupay as Merchant of Record | Handle Global Tax Compliance",
		description:
			"Rupay acts as your Merchant of Record, handling all international sales tax compliance globally.",
	},
};

export default function MerchantOfRecordPage() {
	return (
		<div className="flex flex-col gap-y-2 md:w-full">
			<Header />

			<main className="relative flex flex-col px-4 md:w-full md:px-0">
				<div className="flex flex-col">
					<div className="relative flex flex-col md:items-center">
						<div className="w-full py-12 md:max-w-3xl md:px-0 md:py-16 xl:max-w-6xl flex flex-col md:gap-y-32 gap-y-16 pt-0 md:pt-0">
							<HeroSection />

							<ContentSections />

							<CtaSection />
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
