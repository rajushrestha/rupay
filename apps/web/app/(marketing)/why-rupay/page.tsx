import { Header } from "@/app/components/layout/header";
import { Footer } from "@/app/components/layout/footer";
import { HeroSection } from "./components/hero-section";
import { SectionNavigation } from "./components/section-navigation";
import { ContentSections } from "./components/content-sections";
import { CtaSection } from "./components/cta-section";

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
