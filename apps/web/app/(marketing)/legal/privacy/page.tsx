import { Header } from "@/app/components/layout/header";
import { Footer } from "@/app/components/layout/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy | Rupay",
	description:
		"Privacy Policy for Rupay - a payment platform enabling Nepalese developers to accept global payments.",
	alternates: {
		canonical: "/legal/privacy",
	},
	openGraph: {
		title: "Privacy Policy | Rupay",
		description: "Privacy Policy for Rupay payment platform.",
		type: "website",
		locale: "en_US",
		siteName: "Rupay",
		url: "/legal/privacy",
	},
};

export default function PrivacyPage() {
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
										Privacy Policy
									</h1>
									<p className="text-lg text-muted-foreground">
										<strong>Effective date:</strong> {new Date().toISOString().split("T")[0]}
									</p>
								</div>

								<div className="flex flex-col gap-y-8 text-lg text-muted-foreground">
									<section className="flex flex-col gap-y-4">
										<p>
											Rupay, LLC ("Rupay," "we," or "us") knows that you care about how your personal information is used and shared, and we take your privacy seriously. Please read the following to learn more about our Privacy Policy. By visiting or using the rupay.dev website and domain name, and any other linked pages, features, content, or any other services we offer from time to time in connection therewith (collectively, the "Service"), you acknowledge that you accept the practices and policies outlined in this Privacy Policy, and you hereby consent that we will collect, use, and share your information in the following ways.
										</p>
									</section>

									<section className="flex flex-col gap-y-4">
										<h2 className="text-2xl font-semibold text-foreground">
											What does this Privacy Policy cover?
										</h2>
										<p>
											This Privacy Policy covers our treatment of personally identifiable information ("Personal Information") that we gather when you are accessing or using our Service. This policy does not apply to the practices of companies we don't own or control, or people that we don't manage.
										</p>
										<p>
											We use third-party services such as Stripe for payment processing. When you use our payment services, Stripe collects and processes your payment information according to their own privacy policy. We encourage you to review Stripe's privacy policy to understand how they handle your payment data.
										</p>
									</section>

									<section className="flex flex-col gap-y-4">
										<h2 className="text-2xl font-semibold text-foreground">
											Will Rupay ever change this Privacy Policy?
										</h2>
										<p>
											We're constantly trying to improve our Service, so we may need to change this Privacy Policy from time to time as well, but we will alert you to changes by placing a notice on the rupay.dev website, by sending you an email, and/or by some other means. Please note that if you've opted not to receive legal notice emails from us (or you haven't provided us with your email address), those legal notices will still govern your use of the Service, and you are still responsible for reading and understanding them. If you use the Service after any changes to the Privacy Policy have been posted, that means you agree to all of the changes.
										</p>
									</section>

									<section className="flex flex-col gap-y-4">
										<h2 className="text-2xl font-semibold text-foreground">
											What Information does Rupay Collect?
										</h2>
										<div className="flex flex-col gap-y-3">
											<h3 className="text-xl font-semibold text-foreground">
												Information You Provide to Us:
											</h3>
											<ul className="list-disc list-inside flex flex-col gap-y-2 ml-4">
												<li>We receive and store any information you knowingly provide to us. For example, through the registration process and/or through your account settings, we may collect Personal Information such as your name, email address, phone number, and payment information.</li>
												<li>If you provide your bank account information for wire transfers to Nepal, we will collect and store this information securely. This information is shared with our payment processing partners and our business validation partner, Lunover Digital Private Limited, for the purpose of processing payments and verifying business legitimacy.</li>
												<li>If you provide your third-party account credentials to us (such as your GitHub username), we may collect information from those accounts as well.</li>
												<li>Certain information may be required to register with us or to take advantage of some of our features.</li>
											</ul>
										</div>
										<div className="flex flex-col gap-y-3">
											<h3 className="text-xl font-semibold text-foreground">
												Information Collected Automatically:
											</h3>
											<ul className="list-disc list-inside flex flex-col gap-y-2 ml-4">
												<li>Whenever you interact with our Service, we automatically receive and record information on our server logs from your browser or device, which may include your IP address, geolocation data, device identification, "cookie" information, the type of browser and/or device you're using to access our Service, and the page or feature you requested.</li>
												<li>We use cookies and similar tracking technologies to track activity on our Service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.</li>
											</ul>
										</div>
									</section>

									<section className="flex flex-col gap-y-4">
										<h2 className="text-2xl font-semibold text-foreground">
											How does Rupay use the information it collects?
										</h2>
										<p>
											We use the Personal Information we collect to:
										</p>
										<ul className="list-disc list-inside flex flex-col gap-y-2 ml-4">
											<li>Provide, maintain, and improve our Service</li>
											<li>Process transactions and send related information including transaction confirmations</li>
											<li>Send you technical notices, updates, security alerts, and support and administrative messages</li>
											<li>Respond to your comments, questions, and requests and provide customer service</li>
											<li>Communicate with you about products, services, offers, and events offered by Rupay and others</li>
											<li>Monitor and analyze trends, usage, and activities in connection with our Service</li>
											<li>Detect, investigate, and prevent fraudulent transactions and other illegal activities and protect the rights and property of Rupay and others</li>
											<li>Verify business information through our partner Lunover Digital Private Limited for developers in Nepal</li>
											<li>Facilitate wire transfers to Nepalese bank accounts</li>
										</ul>
									</section>

									<section className="flex flex-col gap-y-4">
										<h2 className="text-2xl font-semibold text-foreground">
											Will Rupay Share Any of the Personal Information it Receives?
										</h2>
										<p>
											We may share your Personal Information with third parties as described in this section:
										</p>
										<div className="flex flex-col gap-y-3">
											<h3 className="text-xl font-semibold text-foreground">
												Payment Processing:
											</h3>
											<p>
												We use Stripe for payment processing. When you make a payment, Stripe collects and processes your payment information according to their privacy policy. We do not store your full payment card details on our servers.
											</p>
										</div>
										<div className="flex flex-col gap-y-3">
											<h3 className="text-xl font-semibold text-foreground">
												Business Validation in Nepal:
											</h3>
											<p>
												For developers in Nepal, we work with our partner Lunover Digital Private Limited to validate business information and legitimacy. This may include sharing business registration details, bank account information, and other relevant information necessary for verification purposes.
											</p>
										</div>
										<div className="flex flex-col gap-y-3">
											<h3 className="text-xl font-semibold text-foreground">
												Service Providers:
											</h3>
											<p>
												We employ other companies and people to perform tasks on our behalf and need to share your information with them to provide products or services to you. Unless we tell you differently, our agents do not have any right to use the Personal Information we share with them beyond what is necessary to assist us.
											</p>
										</div>
										<div className="flex flex-col gap-y-3">
											<h3 className="text-xl font-semibold text-foreground">
												Business Transfers:
											</h3>
											<p>
												We may choose to buy or sell assets. In these types of transactions, customer information is typically one of the business assets that are transferred. Also, if we (or substantially all of our assets) are acquired, or if we go out of business or enter bankruptcy, Personal Information would be one of the assets transferred to or acquired by a third party.
											</p>
										</div>
										<div className="flex flex-col gap-y-3">
											<h3 className="text-xl font-semibold text-foreground">
												Protection of Rupay and Others:
											</h3>
											<p>
												We reserve the right to access, read, preserve, and disclose any information as we reasonably believe is necessary to (i) satisfy any applicable law, regulation, legal process or governmental request, (ii) enforce these Terms of Use and other agreements, including investigation of potential violations thereof, (iii) detect, prevent, or otherwise address fraud, security or technical issues, (iv) respond to user support requests, or (v) protect the rights, property or safety of Rupay, our users, or the public.
											</p>
										</div>
									</section>

									<section className="flex flex-col gap-y-4">
										<h2 className="text-2xl font-semibold text-foreground">
											Is Personal Information about me secure?
										</h2>
										<p>
											Your account is protected by a password for your privacy and security. You must prevent unauthorized access to your account and Personal Information by selecting and protecting your password appropriately and limiting access to your computer and browser by signing off after you have finished accessing your account.
										</p>
										<p>
											We endeavor to protect the privacy of your account and other Personal Information we hold in our records, but unfortunately, we cannot guarantee complete security. Unauthorized entry or use, hardware or software failure, and other factors, may compromise the security of user information at any time.
										</p>
									</section>

									<section className="flex flex-col gap-y-4">
										<h2 className="text-2xl font-semibold text-foreground">
											What Personal Information can I access?
										</h2>
										<p>
											Through your account settings, you may access, and, in some cases, edit or delete the following information you've provided to us:
										</p>
										<ul className="list-disc list-inside flex flex-col gap-y-2 ml-4">
											<li>name and password</li>
											<li>email address</li>
											<li>user profile information</li>
											<li>payment and billing information</li>
										</ul>
										<p>
											The information you can view, update, and delete may change as the Service changes. If you have any questions about viewing or updating information we have on file about you, please contact us at support@rupay.dev.
										</p>
									</section>

									<section className="flex flex-col gap-y-4">
										<h2 className="text-2xl font-semibold text-foreground">
											Data Retention
										</h2>
										<p>
											We will retain your Personal Information for as long as your account is active or as needed to provide you services. We will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
										</p>
									</section>

									<section className="flex flex-col gap-y-4">
										<h2 className="text-2xl font-semibold text-foreground">
											International Data Transfers
										</h2>
										<p>
											Rupay is a US-based company. Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
										</p>
										<p>
											For developers in Nepal, we may share your information with our partner Lunover Digital Private Limited located in Nepal for business validation purposes. By using our Service, you consent to the transfer of your information to the United States and Nepal.
										</p>
									</section>

									<section className="flex flex-col gap-y-4">
										<h2 className="text-2xl font-semibold text-foreground">
											Children's Privacy
										</h2>
										<p>
											We do not knowingly collect or solicit personal information from anyone under the age of 16. If you are under 16, please do not attempt to register for the Service or send any personal information about yourself to us. If we learn that we have collected personal information from a child under age 16, we will delete that information as quickly as possible. If you believe that a child under 16 may have provided us personal information, please contact us at support@rupay.dev.
										</p>
									</section>

									<section className="flex flex-col gap-y-4">
										<h2 className="text-2xl font-semibold text-foreground">
											Changes to this Privacy Policy
										</h2>
										<p>
											We may amend this Privacy Policy from time to time. Use of information we collect now is subject to the Privacy Policy in effect at the time such information is used. If we make changes in the way we use Personal Information, we will notify you by posting an announcement on our Service or sending you an email. Users are bound by any changes to the Privacy Policy when he or she uses the Service after such changes have been first posted.
										</p>
									</section>

									<section className="flex flex-col gap-y-4">
										<h2 className="text-2xl font-semibold text-foreground">
											Questions or Concerns
										</h2>
										<p>
											If you have any questions or concerns regarding our privacy practices, please send us a detailed message to support@rupay.dev, and we will try to resolve your concerns.
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
