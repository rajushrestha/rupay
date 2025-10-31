import Link from "next/link";
import { Logo } from "@/app/components/logo";

export function Header() {
	return (
		<div className="w-full flex-col items-center justify-center py-16 md:pt-28 flex">
			<Link href="/">
				<Logo className="size-20" />
			</Link>
		</div>
	);
}
