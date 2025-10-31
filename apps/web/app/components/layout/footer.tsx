import { Globe } from "@/app/components/globe";
import { Logo } from "@/app/components/logo";
import Link from "next/link";

export function Footer() {
	return (
		<div className=" w-full py-16 lg:py-32 bg-white relative overflow-hidden h-screen">
			<div className="relative z-10 flex flex-col items-center justify-center gap-6">
				<Link href="/" className="flex items-center justify-center gap-4">
					<Logo className="size-10" />
					<span className="text-4xl">Rupay</span>
				</Link>
				<p className="">&copy; Rupay, LLC. {new Date().getFullYear()}</p>
			</div>

			<div className="absolute inset-0 h-screen w-screen flex items-end justify-end overflow-visible">
				<Globe />
			</div>
		</div>
	);
}
