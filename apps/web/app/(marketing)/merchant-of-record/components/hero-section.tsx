import { HERO_CONTENT } from "../constants";

export function HeroSection() {
	return (
		<div className="relative flex flex-col items-center justify-center gap-6 px-4 pt-8 text-center md:pt-12">
			<h1 className="leading-tight! text-balance text-4xl tracking-tight md:px-0 md:text-6xl">
				{HERO_CONTENT.title}
			</h1>
			<p className="max-w-3xl text-balance text-center text-xl leading-relaxed! text-gray-500">
				{HERO_CONTENT.description}
			</p>
		</div>
	);
}
