import { Header } from "@/app/components/layout/header";
import { Footer } from "@/app/components/layout/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Terms of Use | Rupay",
	description:
		"Terms of Use for Rupay - a payment platform enabling Nepalese developers to accept global payments.",
	alternates: {
		canonical: "/legal/terms",
	},
	openGraph: {
		title: "Terms of Use | Rupay",
		description: "Terms of Use for Rupay payment platform.",
		type: "website",
		locale: "en_US",
		siteName: "Rupay",
		url: "/legal/terms",
	},
};

export default function TermsPage() {
	return (
		<div className="flex flex-col gap-y-2 md:w-full">
			<Header />

			<main className="relative flex flex-col px-4 md:w-full md:px-0">
				<div className="flex flex-col">
					<div className="relative flex flex-col md:items-center">
						<div className="w-full py-12 md:max-w-4xl md:px-0 md:py-16 xl:max-w-6xl flex flex-col gap-y-16 pt-0 md:pt-0">
							<div className="max-w-4xl mx-auto flex flex-col gap-y-12 bg-white rounded-4xl md:p-10 py-10 px-4">
								<div className="flex flex-col gap-y-6">
									<h1 className="text-4xl md:text-5xl font-semibold">
										Terms of Use
									</h1>
									<p className="text-lg text-muted-foreground">
										<strong>Effective date:</strong> {new Date().toISOString().split("T")[0]}
									</p>
								</div>

								<div className="flex flex-col gap-y-8 text-lg text-muted-foreground">
									<section className="flex flex-col gap-y-4">
										<p>
											Welcome to Rupay. Please read on to learn the rules and restrictions that govern your use of our website(s), products, services and applications (the "Services"). If you have any questions, comments, or concerns regarding these terms or the Services, please contact us at: support@rupay.dev
										</p>
										<p>
											These Terms of Use (the "Terms") are a binding contract between you and <strong>RUPAY, LLC</strong> ("Rupay," "we" and "us"). Your use of the Services in any way means that you agree to all of these Terms, and these Terms will remain in effect while you use the Services. These Terms include the provisions in this document as well as those in the Privacy Policy.
										</p>
										<p>
											<strong>Please read these Terms carefully.</strong> They cover important information about Services provided to you and any charges, taxes, and fees we bill you. These Terms include information about future changes to these Terms, automatic renewals, limitations of liability, a class action waiver and resolution of disputes by arbitration instead of in court. <strong>PLEASE NOTE THAT YOUR USE OF AND ACCESS TO OUR SERVICES ARE SUBJECT TO THE FOLLOWING TERMS; IF YOU DO NOT AGREE TO ALL OF THE FOLLOWING, YOU MAY NOT USE OR ACCESS THE SERVICES IN ANY MANNER.</strong>
										</p>
									</section>

									<section className="flex flex-col gap-y-4">
										<h2 className="text-2xl font-semibold text-foreground">
											About Rupay
										</h2>
										<p>
											Rupay is a US-based company incorporated in the United States. We are not a Nepalese company registered in Nepal. All payments are received and processed in the United States. We facilitate wire transfers to Nepalese bank accounts for developers based in Nepal.
										</p>
										<p>
											To validate businesses and their nature in Nepal, we have partnered with <strong>Lunover Digital Private Limited</strong>, a Nepalese company that assists us with business validation and verification since there are no APIs and online platforms in Nepal to perform such validations automatically.
										</p>
										<p>
											Rupay is built on top of Stripe's payment infrastructure and is heavily inspired by <a href="https://polar.sh" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Polar.sh</a>, which has proven this platform concept globally. While we are inspired by Polar.sh's open-source approach, Rupay itself is not an open-source platform.
										</p>
									</section>

									<section className="flex flex-col gap-y-4">
										<h2 className="text-2xl font-semibold text-foreground">
											Will these Terms ever change?
										</h2>
										<p>
											We are constantly trying to improve our Services, so these Terms may need to change along with our Services. We reserve the right to change the Terms at any time, but if we do, we will place a notice on our site located at rupay.dev, send you an email, and/or notify you by some other means.
										</p>
										<p>
											If you don't agree with the new Terms, you are free to reject them; unfortunately, that means you will no longer be able to use the Services. If you use the Services in any way after a change to the Terms is effective, that means you agree to all of the changes.
										</p>
										<p>
											Except for changes by us as described here, no other amendment or modification of these Terms will be effective unless in writing and signed by both you and us.
										</p>
									</section>

									<section className="flex flex-col gap-y-4">
										<h2 className="text-2xl font-semibold text-foreground">
											What about my privacy?
										</h2>
										<p>
											Rupay takes the privacy of its users very seriously. For the current Rupay Privacy Policy, please refer to our <a href="/legal/privacy" className="text-emerald-600 hover:underline">Privacy Policy</a>.
										</p>
										<div className="flex flex-col gap-y-2 mt-4">
											<h3 className="text-xl font-semibold text-foreground">
												Children's Online Privacy Protection Act
											</h3>
											<p>
												The Children's Online Privacy Protection Act ("COPPA") requires that online service providers obtain parental consent before they knowingly collect personally identifiable information online from children who are under 13 years of age. We do not knowingly collect or solicit personally identifiable information from children under 16 years of age; if you are a child under 16 years of age, please do not attempt to register for or otherwise use the Services or send us any personal information. If we learn we have collected personal information from a child under 16 years of age, we will delete that information as quickly as possible. If you believe that a child under 16 years of age may have provided us personal information, please contact us at support@rupay.dev.
											</p>
										</div>
									</section>

									<section className="flex flex-col gap-y-4">
										<h2 className="text-2xl font-semibold text-foreground">
											What are the basics of using Rupay?
										</h2>
										<p>
											You may be required to sign up for an account, select a password and user name ("Rupay User ID"), and provide us with certain information or data, such as your contact information. You promise to provide us with accurate, complete, and updated registration information about yourself. You may not select as your Rupay User ID a name that you do not have the right to use, or another person's name with the intent to impersonate that person. You may not transfer your account to anyone else without our prior written permission.
										</p>
										<p>
											You represent and warrant that you are an individual of legal age to form a binding contract (or if not, you've received your parent's or guardian's permission to use the Services and have gotten your parent or guardian to agree to these Terms on your behalf). If you're agreeing to these Terms on behalf of an organization or entity, you represent and warrant that you are authorized to agree to these Terms on that organization's or entity's behalf and bind them to these Terms (in which case, the references to "you" and "your" in these Terms, except for in this sentence, refer to that organization or entity).
										</p>
										<p>
											You will comply with all laws that apply to you, your use of the Services, and your actions and omissions that relate to the Services. If your use of the Services is prohibited by applicable laws, then you aren't authorized to use the Services. We can't and won't be responsible for your using the Services in a way that breaks the law.
										</p>
										<p>
											You will not share your Rupay User ID, account or password with anyone, and you must protect the security of your Rupay User ID, account, password and any other access tools or credentials. You're responsible for any activity associated with your Rupay User ID and account.
										</p>
									</section>

									<section className="flex flex-col gap-y-4">
										<h2 className="text-2xl font-semibold text-foreground">
											Payment Processing and Payouts
										</h2>
										<p>
											Rupay processes payments in the United States through Stripe. All transactions are subject to Stripe's terms and conditions. When you receive payments through Rupay, funds are processed and held in the United States.
										</p>
										<p>
											For developers in Nepal, we facilitate wire transfers to Nepalese bank accounts. You will need to provide valid WIRE bank details including bank name, branch name, account number, account holder name, SWIFT code, and bank address. Standard wire transfer fees apply and are deducted from the transferred amount by the payment service provider. Rupay does not charge any additional fees on top of these standard wire transfer fees.
										</p>
										<p>
											To ensure compliance and validate businesses in Nepal, we work with our partner Lunover Digital Private Limited to verify business information and legitimacy. This partnership helps us maintain the integrity of our platform and comply with applicable regulations.
										</p>
									</section>

									<section className="flex flex-col gap-y-4">
										<h2 className="text-2xl font-semibold text-foreground">
											What are my rights in Rupay?
										</h2>
										<p>
											Rupay is a proprietary platform. While we are inspired by open-source projects like Polar.sh, Rupay itself is not open source. You are granted a limited, non-exclusive, non-transferable, non-sublicensable license to access and use the Services for your personal or commercial purposes in accordance with these Terms.
										</p>
									</section>

									<section className="flex flex-col gap-y-4">
										<h2 className="text-2xl font-semibold text-foreground">
											What about my data?
										</h2>
										<p>
											When you use the Services, you provide us with things like your name, email address, payment information, and other information. You are not granting us any rights to your data except those rights that are necessary to provide the Services to you. Please refer to our Privacy Policy for more information about how we handle your data.
										</p>
									</section>

									<section className="flex flex-col gap-y-4">
										<h2 className="text-2xl font-semibold text-foreground">
											Warranty Disclaimer
										</h2>
										<p>
											THE SERVICES AND CONTENT ARE PROVIDED BY RUPAY (AND ITS LICENSORS AND SUPPLIERS) ON AN "AS-IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR THAT USE OF THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE. SOME STATES DO NOT ALLOW LIMITATIONS ON HOW LONG AN IMPLIED WARRANTY LASTS, SO THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.
										</p>
									</section>

									<section className="flex flex-col gap-y-4">
										<h2 className="text-2xl font-semibold text-foreground">
											Limitation of Liability
										</h2>
										<p>
											TO THE FULLEST EXTENT ALLOWED BY APPLICABLE LAW, UNDER NO CIRCUMSTANCES AND UNDER NO LEGAL THEORY (INCLUDING, WITHOUT LIMITATION, TORT, CONTRACT, STRICT LIABILITY, OR OTHERWISE) SHALL RUPAY BE LIABLE TO YOU OR TO ANY OTHER PERSON FOR (A) ANY INDIRECT, SPECIAL, INCIDENTAL, PUNITIVE OR CONSEQUENTIAL DAMAGES OF ANY KIND, INCLUDING DAMAGES FOR LOST PROFITS, BUSINESS INTERRUPTION, LOSS OF DATA, LOSS OF GOODWILL, WORK STOPPAGE, ACCURACY OF RESULTS, OR COMPUTER FAILURE OR MALFUNCTION, (B) ANY SUBSTITUTE GOODS, SERVICES OR TECHNOLOGY, (C) ANY AMOUNT, IN THE AGGREGATE, IN EXCESS OF THE GREATER OF (I) ONE-HUNDRED ($100) DOLLARS OR (II) THE AMOUNTS PAID AND/OR PAYABLE BY YOU TO RUPAY IN CONNECTION WITH THE SERVICES IN THE TWELVE (12) MONTH PERIOD PRECEDING THIS APPLICABLE CLAIM OR (D) ANY MATTER BEYOND OUR REASONABLE CONTROL. SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL OR CERTAIN OTHER DAMAGES, SO THE ABOVE LIMITATION AND EXCLUSIONS MAY NOT APPLY TO YOU.
										</p>
									</section>

									<section className="flex flex-col gap-y-4">
										<h2 className="text-2xl font-semibold text-foreground">
											Indemnity
										</h2>
										<p>
											You agree to indemnify and hold Rupay harmless from and against any and all claims, liabilities, damages (actual and consequential), losses and expenses (including attorneys' fees) arising from or in any way related to any claims relating to (a) your use of the Services (including any actions taken by a third party using your account), and (b) your violation of these Terms.
										</p>
									</section>

									<section className="flex flex-col gap-y-4">
										<h2 className="text-2xl font-semibold text-foreground">
											Choice of Law
										</h2>
										<p>
											These Terms are governed by and will be construed under the Federal Arbitration Act, applicable federal law, and the laws of the State of Delaware, without regard to the conflicts of laws provisions thereof.
										</p>
									</section>

									<section className="flex flex-col gap-y-4">
										<h2 className="text-2xl font-semibold text-foreground">
											Miscellaneous
										</h2>
										<p>
											The failure of either you or us to exercise, in any way, any right herein shall not be deemed a waiver of any further rights hereunder. If any provision of these Terms are found to be unenforceable or invalid, that provision will be limited or eliminated, to the minimum extent necessary, so that these Terms shall otherwise remain in full force and effect and enforceable.
										</p>
										<p>
											If you have any questions about these Terms, please contact us at support@rupay.dev.
										</p>
									</section>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
