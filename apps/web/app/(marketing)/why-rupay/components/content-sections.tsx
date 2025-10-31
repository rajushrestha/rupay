import { CheckIcon } from "lucide-react";
import {
	INTRODUCTION_CONTENT,
	MERCHANT_OF_RECORD_CONTENT,
	DEVELOPER_EXPERIENCE_CONTENT,
	PRICING_CONTENT,
	WHY_CHOOSE_CONTENT,
} from "../constants";

export function ContentSections() {
	return (
		<div className="max-w-4xl mx-auto flex flex-col gap-y-20 bg-white rounded-4xl md:p-10 py-10 px-4">
			{/* Introduction Section */}
			<section id="introduction" className="flex flex-col gap-y-8 px-4 md:px-0">
				<h2 className="text-3xl md:text-4xl font-semibold">
					{INTRODUCTION_CONTENT.title}
				</h2>
				<div className="flex flex-col gap-y-6">
					{INTRODUCTION_CONTENT.paragraphs.map((paragraph, index) => (
						<p key={index} className="text-lg text-muted-foreground">
							{paragraph}
						</p>
					))}
				</div>
			</section>

			{/* Merchant of Record Section */}
			<section
				id="merchant-of-record"
				className="flex flex-col gap-y-8 px-4 md:px-0"
			>
				<h2 className="text-3xl md:text-4xl font-semibold">
					{MERCHANT_OF_RECORD_CONTENT.title}
				</h2>
				<div className="flex flex-col gap-y-6">
					<div className="flex flex-col gap-y-4">
						<h3 className="text-2xl font-semibold">
							{MERCHANT_OF_RECORD_CONTENT.heading}
						</h3>
						<p className="text-lg text-muted-foreground">
							{MERCHANT_OF_RECORD_CONTENT.description}
						</p>
					</div>
					<ul className="flex flex-col gap-y-4">
						{MERCHANT_OF_RECORD_CONTENT.features.map((feature, index) => (
							<li key={index} className="flex flex-row items-start gap-x-3">
								<CheckIcon className="size-5 text-emerald-500 mt-0.5 shrink-0" />
								<span className="text-lg text-muted-foreground">{feature}</span>
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* Developer Experience Section */}
			<section
				id="developer-experience"
				className="flex flex-col gap-y-8 px-4 md:px-0"
			>
				<h2 className="text-3xl md:text-4xl font-semibold">
					{DEVELOPER_EXPERIENCE_CONTENT.title}
				</h2>
				<div className="flex flex-col gap-y-8">
					{DEVELOPER_EXPERIENCE_CONTENT.sections.map((section, index) => (
						<div key={index} className="flex flex-col gap-y-4">
							<h3 className="text-2xl font-semibold">{section.heading}</h3>
							<p className="text-lg text-muted-foreground">
								{section.description}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* Pricing Section */}
			<section id="pricing" className="flex flex-col gap-y-8 px-4 md:px-0">
				<h2 className="text-3xl md:text-4xl font-semibold">
					{PRICING_CONTENT.title}
				</h2>
				<div className="flex flex-col gap-y-8">
					{PRICING_CONTENT.sections.map((section, index) => (
						<div key={index} className="flex flex-col gap-y-4">
							<h3 className="text-2xl font-semibold">{section.heading}</h3>
							<p className="text-lg text-muted-foreground">
								{section.description}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* Why Choose Rupay Section */}
			<section id="why-switch" className="flex flex-col gap-y-8 px-4 md:px-0">
				<h2 className="text-3xl md:text-4xl font-semibold">
					{WHY_CHOOSE_CONTENT.title}
				</h2>
				<div className="flex flex-col gap-y-8">
					{WHY_CHOOSE_CONTENT.sections.map((section, index) => (
						<div key={index} className="flex flex-col gap-y-4">
							<h3 className="text-2xl font-semibold">{section.heading}</h3>
							<p className="text-lg text-muted-foreground">
								{section.description}
							</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
