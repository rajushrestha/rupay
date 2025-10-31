export const SECTIONS = [
	{ id: "introduction", label: "Introduction" },
	{ id: "merchant-of-record", label: "Merchant of Record" },
	{ id: "developer-experience", label: "Developer Experience" },
	{ id: "pricing", label: "Pricing" },
	{ id: "why-switch", label: "Why choose Rupay?" },
] as const;

export const HERO_CONTENT = {
	title: "Why Choose Rupay?",
	description:
		"Enable Nepalese developers to accept global payments and monetize their software worldwide. Built on Stripe for regions where Stripe isn't supported.",
} as const;

export const CTA_CONTENT = {
	title: "Ready to go global?",
	description:
		"Join Nepalese developers building global software businesses. Start accepting payments worldwide with Rupay's simple integration.",
} as const;

export const INTRODUCTION_CONTENT = {
	title: "Introduction",
	paragraphs: [
		"Rupay is a platform for developers who want to monetize their software, enabling subscription, billing, payments, and customer management.",
		"In Nepal, Stripe is not supported, which means Nepalese developers are unable to accept payments globally. This limitation prevents them from building and scaling software businesses internationally.",
		"Rupay addresses this critical gap by providing a comprehensive payment platform that enables Nepalese developers to accept payments globally. Built on top of Stripe and inspired by Polar.sh, we've created a solution that handles the complexity of global payments, taxes, and compliance.",
		"As a global merchant of record, Rupay takes care of taxes and compliance requirements, allowing developers to focus on what they do best: building great software. Currently launching in Nepal, we will expand to other Stripe-unsupported regions, enabling developers worldwide to access global markets and monetize their software products.",
		"This platform enables Nepalese developers and apps to go global and accept payments worldwide, marking the beginning of a new era for software businesses in Nepal.",
	],
} as const;

export const MERCHANT_OF_RECORD_CONTENT = {
	title: "Merchant of Record",
	heading: "Leave billing infrastructure and international tax headaches to us.",
	description:
		"As a global merchant of record, Rupay takes on the liability of international sales taxes globally for you. This is especially valuable for Nepalese developers who want to sell globally without navigating complex international tax regulations. Focus on building great software while we handle compliance.",
	features: [
		"We handle VAT, GST, and sales tax in all jurisdictions worldwide",
		"EU VAT handling - Proper B2B reverse charge and B2C tax collection",
		"Automatic tax calculation - Real-time tax rates for every transaction",
		"Full compliance management - We handle all the paperwork so you don't have to",
	],
} as const;

export const DEVELOPER_EXPERIENCE_CONTENT = {
	title: "Developer Experience",
	sections: [
		{
			heading: "Built for Developers, Especially in Nepal",
			description:
				"Rupay is built by developers who understand the challenges of accepting payments from regions where Stripe isn't available. We design our APIs & SDKs with developer ergonomics in mind, making it easy for Nepalese developers to integrate global payments into their applications.",
		},
		{
			heading: "Powerful Developer Tools",
			description:
				"We build developer tools that make it easy to iterate quickly and maintain systems effectively. Our platform handles subscriptions, billing, payments, and customer management - everything you need to monetize your software without the complexity. We're not just building a billing system, we're building a platform that enables Nepalese developers to compete globally.",
		},
		{
			heading: "Built on Stripe, Inspired by Polar.sh",
			description:
				"Rupay is built on top of Stripe's robust payment infrastructure and deeply inspired by Polar.sh, which has proven this platform concept globally. This means you get the reliability of Stripe with a platform designed specifically for regions where Stripe isn't directly supported.",
		},
	],
} as const;

export const PRICING_CONTENT = {
	title: "Pricing",
	sections: [
		{
			heading: "Cheapest MoR on the market",
			description:
				"Rupay is priced 20% cheaper than other MoR alternatives. 5% + 0.5¢ per transaction.",
		},
		{
			heading: "No Hidden Fees",
			description:
				"While payouts may incur fees charged by the payout providers (such as Stripe), Rupay does not add any extra fees or markup.",
		},
	],
} as const;

export const WHY_CHOOSE_CONTENT = {
	title: "Why choose Rupay?",
	sections: [
		{
			heading: "Access Global Markets from Nepal",
			description:
				"Rupay enables Nepalese developers to accept payments globally, breaking down the barrier that Stripe's lack of support in Nepal creates. This opens up entirely new markets and revenue opportunities for software businesses in Nepal.",
		},
		{
			heading: "Integrate with 6 lines of code",
			description:
				"We've gone the extra mile to build ergonomic adapters that plug right into the most popular frameworks. If that isn't enough, our versatile SDKs allow you to integrate with Rupay in any way you want.",
		},
		{
			heading: "Secure, robust & reliable payments",
			description:
				"Built on Stripe's infrastructure, you can rest assured that your customers will be able to pay you securely and reliably. We've built a payment system that works for you, not against you.",
		},
		{
			heading: "Global Merchant of Record",
			description:
				"Rupay acts as your merchant of record, handling all international tax compliance, VAT, GST, and sales tax requirements. This means Nepalese developers can sell globally without worrying about complex international tax regulations.",
		},
		{
			heading: "Built for the future",
			description:
				"Rupay is designed with modern architecture principles, ensuring scalability and reliability as your business grows. Our flexible system adapts to your needs, whether you're building a simple SaaS product or a complex multi-tenant platform.",
		},
		{
			heading: "Full transparency",
			description:
				"Since Rupay is open source, you have complete visibility into how everything works. No black boxes, no hidden surprises. You can review the code, contribute improvements, or even self-host if needed.",
		},
		{
			heading: "We're deeply invested in your success",
			description:
				"Rupay is built by developers, for developers - especially those in Nepal and other Stripe-unsupported regions. We understand your challenges because we've faced them too. We listen to your feedback and are always looking for ways to make it easier for you to succeed globally.",
		},
	],
} as const;
