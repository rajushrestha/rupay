"use client";

import { SECTIONS } from "../constants";
import { useState, useEffect, useRef } from "react";

export function SectionNavigation() {
	const [activeSection, setActiveSection] = useState<string>("introduction");
	const isScrollingRef = useRef(false);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	const scrollToSection = (sectionId: string) => {
		isScrollingRef.current = true;
		setActiveSection(sectionId);
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
			// Clear any existing timeout
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
			// Reset scrolling flag after animation completes
			timeoutRef.current = setTimeout(() => {
				isScrollingRef.current = false;
				timeoutRef.current = null;
			}, 1000);
		}
	};

	// Cleanup timeout on unmount
	useEffect(() => {
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, []);

	useEffect(() => {
		const observerOptions = {
			root: null,
			rootMargin: "-20% 0px -70% 0px",
			threshold: [0, 0.1, 0.5, 1],
		};

		const observerCallback = (entries: IntersectionObserverEntry[]) => {
			// Don't update active section if we're programmatically scrolling
			if (isScrollingRef.current) return;

			// Find the entry with the highest intersection ratio that's intersecting
			const intersectingEntries = entries.filter(
				(entry) => entry.isIntersecting,
			);

			if (intersectingEntries.length > 0) {
				const mostVisibleEntry = intersectingEntries.reduce(
					(prev, current) =>
						current.intersectionRatio > prev.intersectionRatio ? current : prev,
					intersectingEntries[0],
				);

				const id = mostVisibleEntry.target.id;
				if (id && SECTIONS.some((section) => section.id === id)) {
					setActiveSection(id);
				}
			} else {
				// If no section is intersecting, find the closest one based on scroll position
				const scrollPosition = window.scrollY + window.innerHeight / 2;
				let closestSectionId: string | null = null;
				let closestDistance = Infinity;

				SECTIONS.forEach((section) => {
					const element = document.getElementById(section.id);
					if (element) {
						const rect = element.getBoundingClientRect();
						const elementTop = rect.top + window.scrollY;
						const distance = Math.abs(scrollPosition - elementTop);
						if (distance < closestDistance) {
							closestDistance = distance;
							closestSectionId = section.id;
						}
					}
				});

				if (closestSectionId) {
					setActiveSection(closestSectionId);
				}
			}
		};

		const observer = new IntersectionObserver(
			observerCallback,
			observerOptions,
		);

		// Observe all sections
		SECTIONS.forEach((section) => {
			const element = document.getElementById(section.id);
			if (element) {
				observer.observe(element);
			}
		});

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<div className="md:sticky md:top-4 z-10 flex flex-wrap items-center justify-center gap-4 px-4 md:gap-6">
			{SECTIONS.map((section) => (
				<button
					type="button"
					key={section.id}
					onClick={() => scrollToSection(section.id)}
					className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
						activeSection === section.id
							? "bg-primary text-primary-foreground"
							: "bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground"
					}`}
				>
					{section.label}
				</button>
			))}
		</div>
	);
}
