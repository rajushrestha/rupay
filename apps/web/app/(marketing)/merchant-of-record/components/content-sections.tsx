import { CheckIcon } from "lucide-react";
import {
	INTRODUCTION_CONTENT,
	PSP_VS_MOR_CONTENT,
	INTERNATIONAL_SALES_TAX_CONTENT,
} from "../constants";

export function ContentSections() {
	return (
		<div className="max-w-4xl mx-auto flex flex-col gap-y-20 bg-white rounded-4xl md:p-10 py-10 px-4">
			{/* Introduction Section */}
			<section
				id="introduction"
				className="flex flex-col gap-y-8 px-4 md:px-0"
			>
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

			{/* PSP vs MoR Section */}
			<section id="psp-vs-mor" className="flex flex-col gap-y-8 px-4 md:px-0">
				<h2 className="text-3xl md:text-4xl font-semibold">
					{PSP_VS_MOR_CONTENT.title}
				</h2>
				<div className="flex flex-col gap-y-12">
					{PSP_VS_MOR_CONTENT.sections.map((section, index) => (
						<div key={index} className="flex flex-col gap-y-6">
							<h3 className="text-2xl font-semibold">{section.heading}</h3>
							<p className="text-lg text-muted-foreground">
								{section.description}
							</p>
							{section.features && (
								<ul className="flex flex-col gap-y-4">
									{section.features.map((feature, idx) => (
										<li key={idx} className="flex flex-row items-start gap-x-3">
											<CheckIcon className="size-5 text-emerald-500 mt-0.5 shrink-0" />
											<span className="text-lg text-muted-foreground">
												{feature}
											</span>
										</li>
									))}
								</ul>
							)}
							{"note" in section && section.note && (
								<p className="text-lg text-muted-foreground italic border-l-4 border-emerald-500 pl-4">
									{section.note}
								</p>
							)}
						</div>
					))}
				</div>

				{/* Comparison Section */}
				<div className="flex flex-col gap-y-8 mt-8">
					<div className="grid md:grid-cols-2 gap-8">
						<div className="flex flex-col gap-y-4 p-6 rounded-lg border border-border bg-accent">
							<h3 className="text-xl font-semibold">
								{PSP_VS_MOR_CONTENT.comparison.goWithPSP.title}
							</h3>
							<ul className="flex flex-col gap-y-3">
								{PSP_VS_MOR_CONTENT.comparison.goWithPSP.points.map(
									(point, idx) => (
										<li key={idx} className="flex flex-row items-start gap-x-3">
											<span className="text-muted-foreground">•</span>
											<span className="text-muted-foreground">{point}</span>
										</li>
									)
								)}
							</ul>
						</div>
						<div className="flex flex-col gap-y-4 p-6 rounded-lg border border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20">
							<h3 className="text-xl font-semibold">
								{PSP_VS_MOR_CONTENT.comparison.goWithRupay.title}
							</h3>
							<ul className="flex flex-col gap-y-3">
								{PSP_VS_MOR_CONTENT.comparison.goWithRupay.points.map(
									(point, idx) => (
										<li key={idx} className="flex flex-row items-start gap-x-3">
											<CheckIcon className="size-5 text-emerald-500 mt-0.5 shrink-0" />
											<span className="text-muted-foreground">{point}</span>
										</li>
									)
								)}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* International Sales Tax Section */}
			<section
				id="international-sales-tax"
				className="flex flex-col gap-y-8 px-4 md:px-0"
			>
				<h2 className="text-3xl md:text-4xl font-semibold">
					{INTERNATIONAL_SALES_TAX_CONTENT.title}
				</h2>
				<div className="flex flex-col gap-y-6">
					{INTERNATIONAL_SALES_TAX_CONTENT.paragraphs.map(
						(paragraph, index) => (
							<p key={index} className="text-lg text-muted-foreground">
								{paragraph}
							</p>
						)
					)}
				</div>

				<div className="flex flex-col gap-y-8 mt-6">
					{INTERNATIONAL_SALES_TAX_CONTENT.sections.map((section, index) => (
						<div key={index} className="flex flex-col gap-y-4">
							<h3 className="text-2xl font-semibold">{section.heading}</h3>
							<p className="text-lg text-muted-foreground">
								{section.description}
							</p>
						</div>
					))}
				</div>

				{/* Complexity Section */}
				<div className="flex flex-col gap-y-6 mt-8">
					<h3 className="text-2xl font-semibold">
						{INTERNATIONAL_SALES_TAX_CONTENT.complexity.title}
					</h3>
					<div className="flex flex-col gap-y-6">
						{INTERNATIONAL_SALES_TAX_CONTENT.complexity.paragraphs.map(
							(paragraph, index) => (
								<p key={index} className="text-lg text-muted-foreground">
									{paragraph}
								</p>
							)
						)}
					</div>
				</div>

				{/* Comparison Section */}
				<div className="flex flex-col gap-y-8 mt-8">
					<h3 className="text-2xl font-semibold">
						{INTERNATIONAL_SALES_TAX_CONTENT.comparison.title}
					</h3>
					<div className="flex flex-col gap-y-8">
						{INTERNATIONAL_SALES_TAX_CONTENT.comparison.sections.map(
							(section, index) => (
								<div key={index} className="flex flex-col gap-y-4">
									<h4 className="text-xl font-semibold">{section.heading}</h4>
									<ul className="flex flex-col gap-y-3">
										{section.points.map((point, idx) => (
											<li
												key={idx}
												className="flex flex-row items-start gap-x-3"
											>
												{section.heading === "Merchant of Record (Rupay)" ? (
													<CheckIcon className="size-5 text-emerald-500 mt-0.5 shrink-0" />
												) : (
													<span className="text-muted-foreground">•</span>
												)}
												<span className="text-lg text-muted-foreground">
													{point}
												</span>
											</li>
										))}
									</ul>
								</div>
							)
						)}
					</div>
				</div>
			</section>
		</div>
	);
}
