import { Header } from "@/app/components/layout/header";
import { Button } from "@workspace/ui/components/button";
import {
	ArrowUpRightIcon,
	CandyIcon,
	ChartNoAxesCombinedIcon,
	ChartPieIcon,
	CheckIcon,
	GemIcon,
	GiftIcon,
	LayoutDashboardIcon,
	LinkIcon,
	RabbitIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "../components/logo";
import { Input } from "@workspace/ui/components/input";
import { Field, FieldGroup, FieldLabel } from "@workspace/ui/components/field";
import { Checkbox } from "@workspace/ui/components/checkbox";
import { useId } from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@workspace/ui/components/select";
import { Footer } from "@/app/components/layout/footer";
import { WaitlistDialog } from "../components/waitlist-dialog";
import { Globe } from "../components/globe";

export default function Home() {
	return (
		<div className="flex flex-col gap-y-2 md:w-full">
			<Header />

			<div className="relative flex flex-col px-4 md:w-full md:px-0">
				<div className="flex flex-col">
					<div className="relative flex flex-col md:items-center">
						<div className="w-full py-12 md:max-w-3xl md:px-0 md:py-16 xl:max-w-6xl flex flex-col gap-y-16 md:gap-y-32 pt-0 md:pt-0">
							<div className="relative flex flex-col items-center justify-center gap-6 px-4 pt-8 text-center md:pt-12">
								<h1 className="leading-tight! text-balance text-5xl tracking-tight md:px-0 md:text-6xl">
									Monetize your software
								</h1>
								<p className="max-w-3xl text-balance text-center text-xl leading-relaxed! text-gray-500">
									Turn your software into a business with 6 lines of code
								</p>
								<div className="mt-6 flex flex-col items-center gap-4 md:flex-row md:gap-6">
									<WaitlistDialog />
									<Button size="xl" variant="ghost" asChild>
										<Link href="/why-rupay">Why Rupay</Link>
									</Button>
								</div>
							</div>

							<section>
								<div className="flex flex-col gap-4 md:gap-8 xl:flex-row">
									<div className="flex flex-col gap-y-6">
										<Link
											className="p-6! flex h-full flex-col justify-between gap-x-6 gap-y-6 rounded-2xl border border-transparent bg-background transition-transform hover:translate-y-[-4px] md:p-10 xl:gap-y-0"
											href="/docs/features/products"
										>
											<div className="flex h-full flex-col gap-y-6">
												<div className="flex h-full flex-col gap-y-2 md:gap-y-6">
													<h3 className="md:leading-tight! text-pretty text-xl md:text-3xl">
														Payments, Usage &amp; Billing
													</h3>
													<p className="w-full grow text-lg text-muted-foreground md:max-w-96">
														Create digital products and SaaS billing with
														flexible pricing models and seamless payment
														processing.
													</p>
												</div>
											</div>
											<div className="grid grid-cols-2 gap-2">
												<div className="flex items-center gap-x-3 rounded-lg border border-border bg-accent px-3 py-2">
													<GiftIcon className="size-4 text-muted-foreground" />
													<span className="text-xs text-muted-foreground">
														Subscriptions
													</span>
												</div>
												<div className="flex items-center gap-x-3 rounded-lg border border-border bg-accent px-3 py-2">
													<ChartPieIcon className="size-4 text-muted-foreground" />
													<span className="text-xs text-muted-foreground">
														Usage Billing
													</span>
												</div>
												<div className="flex items-center gap-x-3 rounded-lg border border-border bg-accent px-3 py-2">
													<GemIcon className="size-4 text-muted-foreground" />
													<span className="text-xs text-muted-foreground">
														Benefits
													</span>
												</div>
												<div className="flex items-center gap-x-3 rounded-lg border border-border bg-accent px-3 py-2">
													<LayoutDashboardIcon className="size-4 text-muted-foreground" />
													<span className="text-xs text-muted-foreground">
														Customer Portal
													</span>
												</div>
												<div className="flex items-center gap-x-3 rounded-lg border border-border bg-accent px-3 py-2">
													<LinkIcon className="size-4 text-muted-foreground" />
													<span className="text-xs text-muted-foreground">
														Checkout Links
													</span>
												</div>
												<div className="flex items-center gap-x-3 rounded-lg border border-border bg-accent px-3 py-2">
													<ChartNoAxesCombinedIcon className="size-4 text-muted-foreground" />
													<span className="text-xs text-muted-foreground">
														Metrics
													</span>
												</div>
											</div>
										</Link>
									</div>
									<div className="flex flex-col gap-y-6">
										<Link
											className="p-6! flex h-full flex-col justify-between gap-x-6 gap-y-6 rounded-2xl border border-transparent bg-background transition-transform hover:translate-y-[-4px] md:p-10 xl:gap-y-0"
											href="/features/customers"
										>
											<div className="flex h-full flex-col gap-y-6">
												<div className="flex h-full flex-col gap-y-2 md:gap-y-6">
													<h3 className="md:leading-tight! text-pretty text-xl md:text-3xl">
														Customer Management
													</h3>
													<p className="w-full grow text-lg text-muted-foreground md:max-w-96">
														Streamlined customer lifecycle management with
														detailed profiles and analytics.
													</p>
												</div>
											</div>
											<div className="relative h-[120px] md:h-[200px]">
												<div className="absolute bottom-8 left-0 right-0 scale-90 transition-transform hover:-translate-y-1">
													<div className="flex items-center gap-x-4 rounded-lg border border-border bg-accent p-4">
														<div className="h-12 w-12 overflow-hidden rounded-full flex items-center justify-center border border-border shadow-sm">
															<RabbitIcon
																className="size-8 text-muted-foreground"
																strokeWidth={1.5}
															/>
														</div>
														<div className="flex flex-col">
															<span className="font-medium text-foreground">
																John Doe
															</span>
															<span className="flex flex-row gap-x-2 text-sm text-muted-foreground">
																<span>Premium Plan</span>
																<span>•</span>
																<span>Monthly</span>
															</span>
														</div>
													</div>
												</div>
												<div className="absolute bottom-4 left-0 right-0 scale-95 transition-transform hover:-translate-y-1">
													<div className="flex items-center gap-x-4 rounded-lg border border-border bg-accent p-4">
														<div className="h-12 w-12 overflow-hidden rounded-full">
															<RabbitIcon className="size-12 text-muted-foreground" />
														</div>
														<div className="flex flex-col">
															<span className="font-medium text-foreground">
																John Doe
															</span>
															<span className="flex flex-row gap-x-2 text-sm text-muted-foreground">
																<span>Premium Plan</span>
																<span>•</span>
																<span>Monthly</span>
															</span>
														</div>
													</div>
												</div>
												<div className="absolute bottom-0 left-0 right-0 transition-transform hover:-translate-y-1">
													<div className="flex items-center gap-x-4 rounded-lg border border-border bg-accent p-4">
														<div className="h-12 w-12 overflow-hidden rounded-full flex items-center justify-center border border-border shadow-sm">
															<RabbitIcon
																className="size-8 text-muted-foreground"
																strokeWidth={1.5}
															/>
														</div>
														<div className="flex flex-col">
															<span className="font-medium text-foreground">
																John Doe
															</span>
															<span className="flex flex-row gap-x-2 text-sm text-muted-foreground">
																<span>Premium Plan</span>
																<span>•</span>
																<span>Monthly</span>
															</span>
														</div>
													</div>
												</div>
											</div>
										</Link>
									</div>
									<div className="flex flex-col gap-y-6">
										<Link
											className="p-6! flex h-full flex-col justify-between gap-x-6 gap-y-6 rounded-2xl border border-transparent bg-background transition-transform hover:translate-y-[-4px] md:p-10 xl:gap-y-0"
											href="/resources/merchant-of-record"
										>
											<div className="flex h-full flex-col gap-y-6">
												<div className="flex h-full flex-col gap-y-2 md:gap-y-6">
													<h3 className="md:leading-tight! text-pretty text-xl md:text-3xl">
														Global Merchant of Record
													</h3>
													<p className="w-full grow text-lg text-muted-foreground md:max-w-96">
														Focus on your passion while we handle all headaches
														&amp; tax compliance.
													</p>
												</div>
											</div>
											<div className="flex flex-col gap-y-2 rounded-lg border border-border bg-accent p-4">
												<div className="flex items-center justify-between">
													<span className="text-sm text-foreground">
														Tax Report 2025
													</span>
													<span className="text-sm text-emerald-500">
														Submitted
													</span>
												</div>
												<div className="flex items-center justify-between border-t border-border pt-2">
													<span className="text-sm text-muted-foreground">
														VAT (EU)
													</span>
													<span className="text-sm text-muted-foreground">
														€2,450.00
													</span>
												</div>
												<div className="flex items-center justify-between">
													<span className="text-sm text-muted-foreground">
														Sales Tax (US)
													</span>
													<span className="text-sm text-muted-foreground">
														$3,120.00
													</span>
												</div>
											</div>
										</Link>
									</div>
								</div>
							</section>
							<section>
								<Link target="_blank" href="/blog/rupay-seed-announcement">
									<div className="md:rounded-4xl flex w-full flex-col gap-y-12 overflow-hidden rounded-2xl bg-white">
										<div className="flex flex-col items-center gap-y-8 px-8 pt-8 md:px-16 md:pt-16">
											<span className="text-lg text-muted-foreground">
												Early Access
											</span>
											<h1 className="w-fit max-w-2xl text-pretty text-center text-2xl md:text-4xl md:leading-normal">
												Releasing Rupay for Early Access
											</h1>
											<Button>
												<span>Read the release note</span>
												<ArrowUpRightIcon className="size-4" />
											</Button>
										</div>
										<div
											className="relative m-2 flex h-96 items-center justify-center rounded-xl md:m-4 md:rounded-3xl"
											style={{
												backgroundImage:
													"url('/assets/landing/abstract-1.png')",
												backgroundSize: "cover",
												backgroundPosition: "center center",
											}}
										>
											<div className="relative flex flex-row items-center gap-10 text-white">
												<Logo className="size-20" />
												<span className="text-7xl">Rupay</span>
											</div>
										</div>
									</div>
								</Link>
							</section>
							<section className="relative flex flex-col md:items-center">
								<div className="rounded-4xl flex w-full flex-col overflow-hidden bg-white">
									<div className="flex flex-col items-center gap-y-8 px-8 pt-8 md:px-16 md:pt-16">
										<span className="text-lg text-muted-foreground">
											Built for simplicity
										</span>
										<h1 className="w-fit max-w-2xl text-pretty text-center text-2xl md:text-4xl md:leading-normal">
											Powerful Checkouts Made Simple
										</h1>
										<Button>
											<span>Integrate Checkouts</span>
											<ArrowUpRightIcon className="size-4" />
										</Button>
									</div>
									<div className="relative h-[300px] md:h-[490px] overflow-hidden">
										<div className="shadow-3xl rounded-4xl pointer-events-none absolute left-8 right-8 top-16 flex flex-col items-center md:left-16 md:right-16">
											<div className="lg:rounded-4xl  rounded-xl md:rounded-3xl bg-muted md:bg-white divide-gray-200 dark:divide-transparent  shadow-xs grid w-full auto-cols-fr grid-flow-row auto-rows-max gap-y-12 md:grid-flow-col grid-rows-1 items-stretch md:gap-y-24 md:divide-x overflow-hidden border border-gray-100 pt-10 md:pt-0 md:p-0">
												<div className="md:bg-gray-50  flex flex-col gap-y-8 md:p-12">
													<div className="flex flex-col items-center md:items-start gap-y-6 md:gap-y-8">
														<div className=" z-2 relative flex shrink-0 items-center justify-center rounded-full border-2 border-gray-200 bg-white text-sm h-12 w-12 md:h-16 md:w-16">
															<CandyIcon
																className="size-8 text-muted-foreground"
																strokeWidth={1.5}
															/>
														</div>
														<h2 className="text-3xl">Pro Tier</h2>
													</div>
													<div className=" relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl bg-gray-100 bg-cover bg-center lg:rounded-3xl dark:border">
														<div
															className="absolute inset-0 h-full w-full bg-cover bg-center"
															style={{
																backgroundImage:
																	"url('/assets/placeholder.png')",
															}}
														></div>
													</div>
												</div>
												<div className="flex flex-col gap-y-8 md:p-12">
													<div className="flex flex-col justify-between gap-y-24">
														<FieldGroup>
															<Field>
																<FieldLabel htmlFor={useId()}>Email</FieldLabel>
																<Input
																	id={useId()}
																	placeholder="john.doe@example.com"
																	required
																/>
															</Field>
															<Field>
																<FieldLabel htmlFor={useId()}>
																	Name on Card
																</FieldLabel>
																<Input
																	id={useId()}
																	placeholder="Evil Rabbit"
																	required
																/>
															</Field>
															<Field orientation="horizontal">
																<Checkbox id={useId()} defaultChecked />
																<FieldLabel
																	htmlFor={useId()}
																	className="font-normal"
																>
																	I&apos;m purchasing as a business
																</FieldLabel>
															</Field>
															<Field>
																<FieldLabel htmlFor={useId()}>
																	Billing Address
																</FieldLabel>
																<Select defaultValue="">
																	<SelectTrigger id={useId()}>
																		<SelectValue placeholder="Country" />
																	</SelectTrigger>
																	<SelectContent>
																		<SelectItem value="US">
																			United States
																		</SelectItem>
																	</SelectContent>
																</Select>
															</Field>
															<Field>
																<FieldLabel htmlFor={useId()}>
																	Discount Code
																	<span className="text-xs text-muted-foreground ml-auto">
																		(optional)
																	</span>
																</FieldLabel>
																<Input
																	id={useId()}
																	placeholder="Enter discount code"
																/>
															</Field>
														</FieldGroup>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>
							<section className="flex w-full flex-col overflow-hidden rounded-2xl md:flex-row md:rounded-4xl  bg-white md:items-stretch">
								<div className="flex flex-1 flex-col justify-center gap-y-8 p-8 md:aspect-square md:p-16">
									<h2 className="text-2xl leading-normal! md:text-3xl">
										Rupay as Merchant of Record
									</h2>
									<p className="text-lg leading-relaxed text-pretty">
										Forget all about billing &amp; taxes. We handle it all for
										you as the merchant of record.
									</p>
									<ul className="flex flex-col gap-y-1">
										<li className="flex flex-row items-center gap-x-2">
											<CheckIcon className="size-4 text-emerald-500" />
											<p className="leading-relaxed text-pretty">
												Sales Tax, VAT, GST, etc.
											</p>
										</li>
										<li className="flex flex-row items-center gap-x-2">
											<CheckIcon className="size-4 text-emerald-500" />
											<p className="leading-relaxed text-pretty">
												Withdraw with Stripe Connect
											</p>
										</li>
										<li className="flex flex-row items-center gap-x-2">
											<CheckIcon className="size-4 text-emerald-500" />
											<p className="leading-relaxed text-pretty">
												Detailed Transactions Ledger
											</p>
										</li>
									</ul>
									<div className="flex flex-row items-center gap-x-6">
										<Button variant="outline" size="lg" asChild>
											<Link href="/merchant-of-record">
												<span>Learn more</span>
												<ArrowUpRightIcon />
											</Link>
										</Button>
									</div>
								</div>
								<div className="relative flex aspect-square flex-1 p-8 md:p-16">
									<Image
										alt="Rupay as Merchant of Record"
										loading="lazy"
										width={500}
										height={500}
										decoding="async"
										className="absolute inset-0 h-full w-full object-cover"
										src="/assets/landing/mor.jpg"
									/>
								</div>
							</section>
						</div>

						<div className="relative flex flex-col md:items-center">
							<div className="w-full py-12 md:max-w-3xl md:px-0 md:py-16 xl:max-w-6xl xl:py-32 flex flex-col gap-y-24">
								<div className="flex w-full flex-col gap-y-12">
									<div className="flex flex-col items-center">
										<span className="dark:text-polar-500 text-lg text-gray-400">
											Early Member Pricing
										</span>
										<h1 className="w-fit max-w-xl pt-8 pb-12 text-center text-2xl text-pretty md:text-4xl">
											5% + 50¢ per transaction
										</h1>
										<Button asChild>
											<Link href="/pricing">
												<span>Learn more</span>
												<ArrowUpRightIcon />
											</Link>
										</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}
