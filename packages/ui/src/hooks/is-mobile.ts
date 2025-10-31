import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
	const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

	useEffect(() => {
		const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
		const onChange = () => {
			setIsMobile(mql.matches);
		};
		// Set initial value
		setIsMobile(mql.matches);
		mql.addEventListener("change", onChange);
		return () => mql.removeEventListener("change", onChange);
	}, []);

	// Return false during SSR and initial render to avoid hydration mismatch
	return isMobile ?? false;
}
