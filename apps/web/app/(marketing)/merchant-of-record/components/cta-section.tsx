import { CTA_CONTENT } from "../constants";
import { WaitlistDialog } from "@/app/components/waitlist-dialog";

export function CtaSection() {
	return (
		<section className="flex flex-col items-center gap-y-8 px-4 py-10 md:px-0 md:py-16">
			<div className="flex flex-col items-center gap-y-6 text-center">
				<h3 className="text-4xl font-semibold">{CTA_CONTENT.title}</h3>
				<p className="text-lg text-muted-foreground max-w-2xl">
					{CTA_CONTENT.description}
				</p>
				<WaitlistDialog />
			</div>
		</section>
	);
}
