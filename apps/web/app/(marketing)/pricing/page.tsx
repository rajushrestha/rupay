import { Header } from "@/app/components/layout/header";
import { Footer } from "@/app/components/layout/footer";
import { Button } from "@workspace/ui/components/button";
import { ArrowUpRightIcon } from "lucide-react";
import { WaitlistDialog } from "@/app/components/waitlist-dialog";

export default function PricingPage() {
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
									Rupay Pricing
								</h1>
							</div>

							<div className="max-w-4xl mx-auto flex flex-col gap-y-20 bg-white rounded-4xl md:p-10 py-10 px-4">
								{/* Introduction Section */}
								<section className="flex flex-col gap-y-8 px-4 md:px-0">
									<h2 className="text-3xl md:text-4xl font-semibold">
										Introduction
									</h2>
									<div className="flex flex-col gap-y-6">
										<div className="flex flex-col gap-y-4">
											<h3 className="text-2xl font-semibold">
												Cheapest MoR on the market
											</h3>
											<p className="text-lg text-muted-foreground">
												Rupay is priced 20% cheaper than other MoR alternatives.
												5% and 50¢ per transaction.
											</p>
										</div>
										<div className="flex flex-col gap-y-4">
											<h3 className="text-2xl font-semibold">No Hidden Fees</h3>
											<p className="text-lg text-muted-foreground">
												While payouts may incur fees charged by the payout
												providers (such as Stripe), Rupay does not add any extra
												fees or markup.
											</p>
										</div>
									</div>
								</section>

								{/* Transaction Fees Section */}
								<section className="flex flex-col gap-y-8 px-4 md:px-0">
									<h2 className="text-3xl md:text-4xl font-semibold">
										Transaction Fees
									</h2>
									<div className="flex flex-col gap-y-6">
										<h3 className="text-2xl font-semibold">
											5% + 50¢ per transaction
										</h3>
										<p className="text-lg text-muted-foreground">
											Rupay is currently built on Stripe, and we cover their
											2.9% + 30¢ fee from ours. However, they impose a few
											additional fees for certain transactions that we need to
											pass on.
										</p>
									</div>
								</section>

								{/* Additional Fees Section */}
								<section className="flex flex-col gap-y-8 px-4 md:px-0">
									<h2 className="text-3xl md:text-4xl font-semibold">
										Additional Fees
									</h2>
									<div className="flex flex-col gap-y-6">
										<ul className="flex flex-col gap-y-4">
											<li className="flex flex-row items-start gap-x-3">
												<span className="text-lg text-muted-foreground">
													<strong className="text-foreground">+1.5%</strong> for
													international cards (non-US)
												</span>
											</li>
											<li className="flex flex-row items-start gap-x-3">
												<span className="text-lg text-muted-foreground">
													<strong className="text-foreground">+0.5%</strong> for
													subscription payments
												</span>
											</li>
										</ul>
										<p className="text-lg text-muted-foreground">
											We also reserve the right to pass on any other fees Stripe
											might impose in the future
										</p>
									</div>
								</section>

								{/* Example Section */}
								<section className="flex flex-col gap-y-8 px-4 md:px-0">
									<h2 className="text-3xl md:text-4xl font-semibold">
										Example
									</h2>
									<div className="flex flex-col gap-y-6">
										<p className="text-lg text-muted-foreground">
											Let&apos;s look at an example breakdown with all these
											additional fees applied. Below is a payment of a $30
											subscription from Sweden (25% VAT).
										</p>
										<div className="overflow-x-auto">
											<table className="w-full border-collapse">
												<tbody className="flex flex-col gap-y-2">
													<tr className="flex justify-between border-b border-border pb-2">
														<td className="text-lg text-muted-foreground">
															Product Price
														</td>
														<td className="text-lg font-medium">$30</td>
													</tr>
													<tr className="flex justify-between border-b border-border pb-2">
														<td className="text-lg text-muted-foreground">
															VAT (25%)
														</td>
														<td className="text-lg font-medium">$7.5</td>
													</tr>
													<tr className="flex justify-between border-b border-border pb-2">
														<td className="text-lg text-muted-foreground">
															Total Transaction Value
														</td>
														<td className="text-lg font-medium">$37.5</td>
													</tr>
													<tr className="flex justify-between border-b border-border pb-2">
														<td className="text-lg text-muted-foreground">
															Transaction Fee (5% + 50¢)
														</td>
														<td className="text-lg font-medium">$2.38</td>
													</tr>
													<tr className="flex justify-between border-b border-border pb-2">
														<td className="text-lg text-muted-foreground">
															International Card (+1.5%)
														</td>
														<td className="text-lg font-medium">$0.56</td>
													</tr>
													<tr className="flex justify-between border-b border-border pb-2">
														<td className="text-lg text-muted-foreground">
															Subscription (+0.5%)
														</td>
														<td className="text-lg font-medium">$0.19</td>
													</tr>
													<tr className="flex justify-between pt-2">
														<td className="text-lg font-semibold">
															Total Fees (Before Payout)
														</td>
														<td className="text-lg font-semibold">$3.13</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</section>

								{/* Refunds Section */}
								<section className="flex flex-col gap-y-8 px-4 md:px-0">
									<h2 className="text-3xl md:text-4xl font-semibold">
										Refunds
									</h2>
									<div className="flex flex-col gap-y-6">
										<p className="text-lg text-muted-foreground">
											You can issue both full or partial refunds on Rupay to
											your customers. However, the initial transaction fees are
											not refunded to you since credit card networks and PSPs
											charge them regardless of a future refund.
										</p>
										<p className="text-lg text-muted-foreground">
											Rupay reserves the right to issue refunds at our own
											discretion up to 60 days after the purchase as part of our
											efforts to continuously and proactively reduce disputes &
											chargebacks which costs you $15/dispute. We only leverage
											this right for this purpose and in the interest of
											reducing chargebacks and fees for you.
										</p>
									</div>
								</section>

								{/* Dispute/Chargeback Fees Section */}
								<section className="flex flex-col gap-y-8 px-4 md:px-0">
									<h2 className="text-3xl md:text-4xl font-semibold">
										Dispute/Chargeback Fees
									</h2>
									<div className="flex flex-col gap-y-6">
										<p className="text-lg text-muted-foreground">
											Sometimes, customers can open a{" "}
											<strong className="text-foreground">
												dispute/chargeback
											</strong>{" "}
											via their bank for a purchase.{" "}
											<strong className="text-foreground">
												Disputes cost $15 per dispute
											</strong>{" "}
											regardless of outcome and is deducted from your balance
											directly. This fee is charged by the underlying credit
											card networks & PSPs regardless of outcome and therefore
											something we cannot refund.
										</p>
										<p className="text-lg text-muted-foreground">
											However, we continuously work to proactively reduce the
											rate of chargebacks across Rupay to be at or lower than
											industry standards.
										</p>
										<p className="text-lg text-muted-foreground">
											Credit card networks impose monitoring programs, penalties
											and higher chargeback costs for sellers with high
											chargeback rates (~0.7%+). Since Rupay is the Merchant of
											Record, we therefore always monitor and proactively
											prevent our rate coming close to these thresholds.
										</p>
										<p className="text-lg text-muted-foreground">
											Therefore, we might need to intervene and even suspend
											your account unless swift and proactive measures are taken
											to reduce chargebacks to an acceptable industry standard.
										</p>
									</div>
								</section>

								{/* Payout Fees Section */}
								<section className="flex flex-col gap-y-8 px-4 md:px-0">
									<h2 className="text-3xl md:text-4xl font-semibold">
										Payout Fees
									</h2>
									<div className="flex flex-col gap-y-6">
										<p className="text-lg text-muted-foreground">
											While payouts may incur fees charged by the payout
											providers (such as Stripe), Rupay does not add any extra
											fees or markup. These are strictly the provider&apos;s
											fees, and Rupay does not profit from them.
										</p>
										<p className="text-lg text-muted-foreground">
											In addition, Rupay offers manual withdrawals for
											developers. Keeping you in control of when to issue
											payouts.
										</p>
										<p className="text-lg text-muted-foreground">
											Unless you have a Rupay balance that you haven&apos;t
											withdrawn for several months, at which point we&apos;ll
											eventually need to trigger a payout on your behalf.
										</p>

										<div className="flex flex-col gap-y-6 mt-4">
											<div className="flex flex-col gap-y-4">
												<h3 className="text-2xl font-semibold">Stripe</h3>
												<ul className="flex flex-col gap-y-2">
													<li className="text-lg text-muted-foreground">
														$2 per month of active payout(s)
													</li>
													<li className="text-lg text-muted-foreground">
														0.25% + $0.25 per payout
													</li>
												</ul>
												<h4 className="text-xl font-semibold mt-2">
													Cross border fees (currency conversion)
												</h4>
												<p className="text-lg text-muted-foreground">
													0.25% (EU) - 1% in other countries
												</p>
											</div>

											<div className="flex flex-col gap-y-4">
												<h3 className="text-2xl font-semibold">
													Open Collective
												</h3>
												<p className="text-lg text-muted-foreground">
													10% on amount transferred
												</p>
											</div>
										</div>
									</div>
								</section>

								{/* Volume Pricing Section */}
								<section className="flex flex-col gap-y-8 px-4 md:px-0">
									<h2 className="text-3xl md:text-4xl font-semibold">
										Volume Pricing
									</h2>
									<div className="flex flex-col gap-y-6">
										<p className="text-lg text-muted-foreground">
											Large or fast-growing business? We can offer custom
											pricing to better fit your needs.
										</p>
										<div className="mb-4">
											<Button asChild>
												<a href="mailto:contact@rupay.dev">
													<span>Reach out to us</span>
													<ArrowUpRightIcon className="size-4" />
												</a>
											</Button>
										</div>
									</div>
								</section>
							</div>

							{/* CTA Section */}
							<section className="flex flex-col items-center gap-y-8 px-4 py-10 md:px-0 md:py-16">
								<div className="flex flex-col items-center gap-y-6 text-center">
									<h3 className="text-4xl font-semibold">
										Ready to get started?
									</h3>
									<p className="text-lg text-muted-foreground max-w-2xl">
										Start monetizing your software today with Rupay. Get up and
										running in minutes with our simple integration process.
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
