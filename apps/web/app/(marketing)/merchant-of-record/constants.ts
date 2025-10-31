export const HERO_CONTENT = {
	title: "Rupay as Merchant of Record",
	description:
		"We take on the liability of international sales taxes globally for you. So you can focus on growing your business instead of accounting bills.",
} as const;

export const CTA_CONTENT = {
	title: "Ready to go global?",
	description:
		"Join Nepalese developers building global software businesses. Let Rupay handle all the tax compliance so you can focus on what you do best.",
} as const;

export const INTRODUCTION_CONTENT = {
	title: "Introduction",
	paragraphs: [
		"What is a Merchant of Record?",
		"We take on the liability of international sales taxes globally for you. So you can focus on growing your business instead of accounting bills. Leave billing infrastructure and international sales tax headaches to us.",
		"As a Merchant of Record, Rupay acts as the legal seller of your digital products and services. This means we handle all the complex tax compliance, registration, and remittance requirements that come with selling globally - especially valuable for Nepalese developers who want to sell internationally without navigating complex international tax regulations.",
	],
} as const;

export const PSP_VS_MOR_CONTENT = {
	title: "PSP vs. MoR",
	sections: [
		{
			heading: "Payment Service Provider (PSPs)",
			description:
				"Stripe and other Payment Service Providers (PSPs) offer an accessible and convenient abstraction to facilitate transactions on top of underlying credit card networks & banks.",
			features: [
				"Powerful, flexible & low-level APIs to facilitate transactions",
				"Can be used to power all business- and pricing models under the sun",
				"You are responsible for all liabilities associated with transactions, e.g. international taxes",
				"Low-level APIs require more development even for common use cases",
			],
			note: "However, Stripe is not available in Nepal, which creates a significant barrier for Nepalese developers wanting to accept global payments.",
		},
		{
			heading: "Merchant of Record",
			description:
				"Merchants of Record offer yet another layer of convenient abstraction to facilitate digital orders on top of the underlying PSPs and transactions.",
			features: [
				"Powerful, higher-level Dashboard, APIs & SDKs to better facilitate digital products, services & orders beyond the underlying transactions",
				"Can be used to power all business- and pricing models under the sun",
				"Less flexibility & control in terms of advanced business- and pricing models",
				"Higher fees per payment, but we handle all tax compliance",
			],
		},
	],
	comparison: {
		goWithPSP: {
			title: "Go with a PSP if...",
			points: [
				"You're comfortable & prefer absolute control with low-level APIs",
				"You're looking for the lowest fees possible",
				"You want to register & file for international taxes yourself",
				"Stripe is available in your region",
			],
		},
		goWithRupay: {
			title: "Go with Rupay if...",
			points: [
				"You're a Nepalese developer who wants to accept global payments",
				"You want product-, customer-, order- and subscription management via an intuitive dashboard",
				"You prefer a more high-level API optimized for making monetization easier",
				"You want us to handle international taxes for you",
				"You want to focus on building great software instead of navigating tax compliance",
			],
		},
	},
} as const;

export const INTERNATIONAL_SALES_TAX_CONTENT = {
	title: "International Sales Tax",
	paragraphs: [
		"Most countries, states and jurisdictions globally impose sales taxes on digital goods and services (VAT, GST, US Sales Tax etc.). Regardless of whether the merchant (seller) is a resident there or not - they're doing business there.",
		"For example, a $10/month subscription should cost $12.5/month for a Swedish (25% VAT) consumer, but $10/month for a Swedish business with VAT registration (reverse charge).",
		"Merchants are responsible for capturing & remitting sales taxes to the local tax authorities. What does that mean in our example?",
	],
	sections: [
		{
			heading: "Capturing",
			description:
				"Charging the Swedish consumer $12.5/month and saving $2.5/month for the Swedish tax authorities. Rupay uses Stripe Tax to automate this process seamlessly.",
		},
		{
			heading: "Remitting",
			description:
				"Filing & paying the captured sales taxes with the tax authorities on time. Stripe Tax does not do this - the merchant is liable to register, file and pay taxes to local tax authorities. This is where Rupay steps in as your Merchant of Record.",
		},
	],
	complexity: {
		title: "The Complexity",
		paragraphs: [
			"Many jurisdictions don't require registration until you reach a certain threshold in terms of sales volume. But others require registration even before the first sale - or after a very low threshold. In addition to having different rates and rules on which goods are taxable and whether they're deductible or not for business customers.",
			"For example, United Kingdom and EU countries require upfront registration for international companies, but Texas (United States) does not until you've sold for more than $500,000.",
			"In short: It's complex and hard. Even large and well-known businesses don't do it perfectly. Arguably, it's almost impossible and at least highly impractical and expensive to comply perfectly upfront. Many companies even delay compliance as a calculated risk, i.e. focus on validating & growing their business with the risk of paying back taxes + penalties later.",
		],
	},
	comparison: {
		title: "PSP vs. Merchant of Record",
		sections: [
			{
				heading: "PSP",
				points: [
					"Your volume alone is what counts towards international thresholds vs. the MoR platform, i.e. customers might not need to pay sales taxes with you, but would via a MoR",
					"You can deduct inbound VAT against purchases your business does with VAT",
					"You're liable for capturing & remitting international sales taxes",
					"Stripe Tax is great to monitor & automate capturing, but registration and remittance is up to you",
				],
			},
			{
				heading: "Merchant of Record (Rupay)",
				points: [
					"We are liable for all of the above as your reseller",
					"Offer EU VAT for B2B sales (expected and desired within EU for businesses) without having to register, capture and remit it yourself",
					"Sales taxes would be added for more customers vs. with you selling directly, but we handle all the compliance",
					"You cannot leverage inbound VAT towards VAT expense deductions yourself, but you don't need to worry about tax registration and filing",
				],
			},
		],
	},
} as const;
