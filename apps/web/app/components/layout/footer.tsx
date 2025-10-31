import { Globe } from "@/app/components/globe";
import { Logo } from "@/app/components/logo";
import Link from "next/link";
import { TwitterIcon } from "lucide-react";

export function Footer() {
	return (
		<div className=" w-full py-16 lg:py-32 bg-white relative overflow-hidden h-screen">
			<div className="relative z-10 flex flex-col items-center justify-center gap-6">
				<Link href="/" className="flex items-center justify-center gap-4">
					<Logo className="size-10" />
					<span className="text-4xl">Rupay</span>
				</Link>
				<div className="flex flex-col items-center gap-4">
					<div className="flex gap-6 flex-wrap justify-center">
						<Link
							href="/legal/terms"
							className="text-sm text-muted-foreground hover:text-foreground transition-colors"
						>
							Terms of Use
						</Link>
						<Link
							href="/legal/privacy"
							className="text-sm text-muted-foreground hover:text-foreground transition-colors"
						>
							Privacy Policy
						</Link>
						<Link
							href="https://x.com/rupaydev"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
						>
							<TwitterIcon className="size-4" />
							<span>X / Twitter</span>
						</Link>
					</div>
					<p className="">&copy; Rupay, LLC. {new Date().getFullYear()}</p>
				</div>
			</div>

			<div className="absolute inset-0 h-screen w-screen flex items-end justify-end overflow-visible">
				<Globe />
			</div>
		</div>
	);
}
