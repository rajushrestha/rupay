import { Header } from "@/app/components/layout/header";
import { Footer } from "@/app/components/layout/footer";
import { WaitlistDialog } from "@/app/components/waitlist-dialog";
import { CheckIcon } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Early Access | Rupay",
	description:
		"Rupay is now open for early access to a selected small number of users. Join the waitlist to be among the first Nepalese developers to accept global payments and monetize your software worldwide.",
	alternates: {
		canonical: "/early-access",
	},
	openGraph: {
		title: "Early Access | Rupay",
		description:
			"Rupay is now open for early access to a selected small number of users. Join the waitlist to be among the first Nepalese developers to accept global payments.",
		type: "article",
		locale: "en_US",
		siteName: "Rupay",
		url: "/early-access",
		publishedTime: "2025-01-01T00:00:00Z",
		modifiedTime: new Date().toISOString(),
	},
	twitter: {
		card: "summary_large_image",
		title: "Early Access | Rupay",
		description:
			"Rupay is now open for early access to a selected small number of users. Join the waitlist to be among the first Nepalese developers.",
	},
};

export default function EarlyAccessPage() {
	return (
		<div className="flex flex-col gap-y-2 md:w-full">
			<Header />

			<main className="relative flex flex-col px-4 md:w-full md:px-0">
				<div className="flex flex-col">
					<div className="relative flex flex-col md:items-center">
						<div className="w-full py-12 md:max-w-3xl md:px-0 md:py-16 xl:max-w-6xl flex flex-col md:gap-y-32 gap-y-16 pt-0 md:pt-0">
							{/* Hero Section */}
							<div className="relative flex flex-col items-center justify-center gap-6 px-4 pt-8 text-center md:pt-12">
								<h1 className="leading-tight! text-balance text-4xl tracking-tight md:px-0 md:text-6xl">
									Early Access
								</h1>
								<p className="max-w-3xl text-balance text-center text-xl leading-relaxed! text-gray-500">
									Rupay is now open for early access to a selected small number
									of users. Join the waitlist to be among the first Nepalese
									developers to accept global payments and monetize your
									software worldwide.
								</p>
							</div>

							{/* Content Section */}
							<div className="max-w-4xl mx-auto flex flex-col gap-y-20 bg-white rounded-4xl md:p-10 py-10 px-4">
								<section className="flex flex-col gap-y-8 px-4 md:px-0">
									<h2 className="text-3xl md:text-4xl font-semibold">
										What is Early Access?
									</h2>
									<div className="flex flex-col gap-y-6">
										<p className="text-lg text-muted-foreground">
											We&apos;re currently in early access phase, which means
											Rupay is available to a limited number of selected users.
											This allows us to gather feedback, refine our platform,
											and ensure everything works perfectly before opening to
											everyone.
										</p>
										<p className="text-lg text-muted-foreground">
											Early access users get priority support and the
											opportunity to shape the future of Rupay. Your feedback
											helps us build the best payment platform for Nepalese
											developers.
										</p>
									</div>
								</section>

								<section className="flex flex-col gap-y-8 px-4 md:px-0">
									<h2 className="text-3xl md:text-4xl font-semibold">
										What&apos;s Next?
									</h2>
									<div className="flex flex-col gap-y-6">
										<p className="text-lg text-muted-foreground">
											We&apos;re gradually expanding access to users on our
											waitlist. As we scale our infrastructure and add more
											features, we&apos;ll open Rupay to all waiting list users.
										</p>
										<p className="text-lg text-muted-foreground">
											By joining the waitlist, you&apos;ll be notified as soon
											as we&apos;re ready to onboard you. We&apos;re working
											hard to make Rupay available to all Nepalese developers as
											soon as possible.
										</p>
									</div>
								</section>

								<section className="flex flex-col gap-y-8 px-4 md:px-0">
									<h2 className="text-3xl md:text-4xl font-semibold">
										What You Get
									</h2>
									<ul className="flex flex-col gap-y-4">
										<li className="flex flex-row items-start gap-x-3">
											<CheckIcon className="size-5 text-emerald-500 mt-0.5 shrink-0" />
											<span className="text-lg text-muted-foreground">
												Priority access to Rupay platform
											</span>
										</li>
										<li className="flex flex-row items-start gap-x-3">
											<CheckIcon className="size-5 text-emerald-500 mt-0.5 shrink-0" />
											<span className="text-lg text-muted-foreground">
												Early access to new features and updates
											</span>
										</li>
										<li className="flex flex-row items-start gap-x-3">
											<CheckIcon className="size-5 text-emerald-500 mt-0.5 shrink-0" />
											<span className="text-lg text-muted-foreground">
												Direct feedback channel to shape the platform
											</span>
										</li>
										<li className="flex flex-row items-start gap-x-3">
											<CheckIcon className="size-5 text-emerald-500 mt-0.5 shrink-0" />
											<span className="text-lg text-muted-foreground">
												Start accepting global payments as a Nepalese developer
											</span>
										</li>
										<li className="flex flex-row items-start gap-x-3">
											<CheckIcon className="size-5 text-emerald-500 mt-0.5 shrink-0" />
											<span className="text-lg text-muted-foreground">
												Merchant of Record services for tax compliance
											</span>
										</li>
									</ul>
								</section>
							</div>

							{/* CTA Section */}
							<section className="flex flex-col items-center gap-y-8 px-4 py-10 md:px-0 md:py-16">
								<div className="flex flex-col items-center gap-y-6 text-center">
									<h3 className="text-4xl font-semibold">Join the Waitlist</h3>
									<p className="text-lg text-muted-foreground max-w-2xl">
										Be among the first Nepalese developers to accept global
										payments. Join the waitlist and we&apos;ll notify you as
										soon as we&apos;re ready to onboard you.
									</p>
									<WaitlistDialog />
								</div>
							</section>
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
