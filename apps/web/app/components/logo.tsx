import { cn } from "@workspace/ui/lib/utils";

export function Logo({ className }: { className?: string }) {
	return (
		<svg
			width="120"
			height="124"
			viewBox="0 0 120 124"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-label="Rupay Logo"
			className={cn("size-7", className)}
		>
			<title>Rupay Logo</title>
			<path
				d="M29.2214 0.840214L0.631104 122.5H18.8249L43.2567 18.4913C70.2875 20.5679 86.4887 39.0842 91.6003 48.6019L52.0937 68.3296C80.7879 84.3194 98.0114 111.078 103.036 122.5L118.631 113.674C109.066 94.777 90.6473 77.5878 83.2831 70.9254L114.473 55.87C94.0955 6.44702 49.0614 -1.40943 29.2214 0.840214Z"
				fill="currentColor"
			/>
		</svg>
	);
}
