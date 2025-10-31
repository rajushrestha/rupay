export const SECTIONS = [
	{ id: "introduction", label: "Introduction" },
	{ id: "merchant-of-record", label: "Merchant of Record" },
	{ id: "developer-experience", label: "Developer Experience" },
	{ id: "pricing", label: "Pricing" },
	{ id: "why-switch", label: "Why choose Rupay?" },
] as const;

export const HERO_CONTENT = {
	title: "Why Rupay is the best way to monetize your software",
} as const;

export const CTA_CONTENT = {
	title: "Ready to get started?",
	description:
		"Start monetizing your software today with Rupay. Get up and running in minutes with our simple integration process.",
} as const;

export const INTRODUCTION_CONTENT = {
	title: "Introduction",
	paragraphs: [
		"Monetizing your software should be easy.",
		"Rupay is an open-source billing infrastructure platform designed specifically for developers who want to monetize their software without the complexity of traditional payment systems.",
		"Built from the ground up with modern development practices, Rupay provides everything you need to start accepting payments, managing subscriptions, and handling complex billing scenarios — all while maintaining full control over your codebase.",
	],
} as const;

export const MERCHANT_OF_RECORD_CONTENT = {
	title: "Merchant of Record",
	heading: "Leave billing infrastructure and international tax headaches to us.",
	description:
		"We take on the liability of international sales taxes globally for you. So you can focus on growing your business instead of accounting bills.",
	features: [
		"We handle VAT, GST, and sales tax in all jurisdictions",
		"EU VAT handling - Proper B2B reverse charge and B2C tax collection",
		"Automatic tax calculation - Real-time tax rates for every transaction",
	],
} as const;

export const DEVELOPER_EXPERIENCE_CONTENT = {
	title: "Developer Experience",
	sections: [
		{
			heading: "Developer Ergonomics",
			description:
				"We design our APIs & SDKs with developer ergonomics in mind. We put the developer experience in the front seat.",
		},
		{
			heading: "Developer Tools",
			description:
				"We build developer tools that make it easy to iterate quickly and maintain systems effectively. We're not just building a billing system, we're building a platform that enables you to build your business.",
		},
	],
} as const;

export const PRICING_CONTENT = {
	title: "Pricing",
	sections: [
		{
			heading: "Cheapest MoR on the market",
			description:
				"Rupay is priced 20% cheaper than other MoR alternatives. 5% and 50¢ per transaction.",
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
			heading: "Integrate with 6 lines of code",
			description:
				"We've gone the extra mile to build ergonomic adapters that plugs right into the most popular frameworks. If that isn't enough, our versatile SDKs allow you to integrate with Rupay in any way you want.",
		},
		{
			heading: "Secure, robust & reliable payments",
			description:
				"You can rest assured that your customers will be able to pay you securely and reliably. We've built a payment system that works for you, not against you.",
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
				"Rupay is built by developers, for developers. We listen to your feedback, and we're always looking for ways to make it easier for you to succeed. We care.",
		},
	],
} as const;
