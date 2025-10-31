import { Header } from "@/app/components/layout/header";
import { Footer } from "@/app/components/layout/footer";
import { HeroSection } from "./components/hero-section";
import { SectionNavigation } from "./components/section-navigation";
import { ContentSections } from "./components/content-sections";
import { CtaSection } from "./components/cta-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Why Choose Rupay? | Enable Global Payments for Nepalese Developers",
	description:
		"Rupay enables Nepalese developers to accept global payments and monetize their software worldwide. Built on Stripe for regions where Stripe isn't supported. Comprehensive payment platform with merchant of record services.",
	alternates: {
		canonical: "/why-rupay",
	},
	openGraph: {
		title: "Why Choose Rupay? | Enable Global Payments for Nepalese Developers",
		description:
			"Rupay enables Nepalese developers to accept global payments and monetize their software worldwide. Built on Stripe for regions where Stripe isn't supported.",
		type: "article",
		locale: "en_US",
		siteName: "Rupay",
		url: "/why-rupay",
		publishedTime: "2025-01-01T00:00:00Z",
		modifiedTime: new Date().toISOString(),
	},
	twitter: {
		card: "summary_large_image",
		title: "Why Choose Rupay? | Enable Global Payments for Nepalese Developers",
		description:
			"Rupay enables Nepalese developers to accept global payments and monetize their software worldwide.",
	},
};

export default function WhyPage() {
	return (
		<div className="flex flex-col gap-y-2 md:w-full">
			<Header />

			<main className="relative flex flex-col px-4 md:w-full md:px-0">
				<div className="flex flex-col">
					<div className="relative flex flex-col md:items-center">
						<div className="w-full py-12 md:max-w-3xl md:px-0 md:py-16 xl:max-w-6xl flex flex-col md:gap-y-32 gap-y-16 pt-0 md:pt-0">
							<HeroSection />

							<SectionNavigation />

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
