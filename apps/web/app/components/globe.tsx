"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { useSpring } from "react-spring";
import { useIsMobile } from "@workspace/ui/hooks/is-mobile";

export function Globe() {
	const isMobile = useIsMobile();
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const pointerInteracting = useRef<number | null>(null);
	const pointerInteractionMovement = useRef(0);
	const [{ r }, api] = useSpring(() => ({
		r: 0,
		config: {
			mass: 1,
			tension: 280,
			friction: 40,
			precision: 0.001,
		},
	}));

	useEffect(() => {
		if (!canvasRef.current) return;

		let phi = 0;
		let width = 0;
		let resizeTimeout: NodeJS.Timeout | null = null;

		const onResize = () => {
			if (canvasRef.current) {
				width = canvasRef.current.offsetWidth;
			}
		};

		// Debounce resize handler to avoid excessive updates
		const debouncedResize = () => {
			if (resizeTimeout) {
				clearTimeout(resizeTimeout);
			}
			resizeTimeout = setTimeout(() => {
				onResize();
				resizeTimeout = null;
			}, 100);
		};

		window.addEventListener("resize", debouncedResize);
		onResize();

		const canvas = canvasRef.current;
		const globe = createGlobe(canvas, {
			devicePixelRatio: 2,
			width: width * 2,
			height: width * 2,
			offset: [0, isMobile ? width * 0.5 : width * 2],
			scale: isMobile ? 1.5 : 1.2,
			phi: 0,
			theta: 0.3,
			dark: 0,
			diffuse: 1,
			mapSamples: 16000,
			mapBrightness: 1.2,
			baseColor: [1, 1, 1],
			markerColor: [251 / 255, 100 / 255, 21 / 255],
			glowColor: [1, 1, 1],
			markers: [
				{
					location: [28.3973623, 84.12576],
					size: 0.15,
					color: [0, 128, 0],
				},
				{ location: [14.5995, 120.9842], size: 0.03 },
				{ location: [19.076, 72.8777], size: 0.1 },
				{ location: [23.8103, 90.4125], size: 0.05 },
				{ location: [30.0444, 31.2357], size: 0.07 },
				{ location: [39.9042, 116.4074], size: 0.08 },
				{ location: [-23.5505, -46.6333], size: 0.1 },
				{ location: [19.4326, -99.1332], size: 0.1 },
				{ location: [40.7128, -74.006], size: 0.1 },
				{ location: [34.6937, 135.5022], size: 0.05 },
				{ location: [41.0082, 28.9784], size: 0.06 },
			],
			onRender: (state) => {
				// This prevents rotation while dragging
				if (!pointerInteracting.current) {
					// Called on every animation frame.
					// `state` will be an empty object, return updated params.
					phi += 0.005;
				}
				state.phi = phi + r.get();
				state.width = width * 2;
				state.height = width * 2;
			},
		});

		const timeoutId = setTimeout(() => {
			if (canvasRef.current) {
				canvasRef.current.style.opacity = "1";
			}
		});

		return () => {
			clearTimeout(timeoutId);
			if (resizeTimeout) {
				clearTimeout(resizeTimeout);
			}
			globe.destroy();
			window.removeEventListener("resize", debouncedResize);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isMobile]);

	return (
		<canvas
			ref={canvasRef}
			onPointerDown={(e) => {
				pointerInteracting.current =
					e.clientX - pointerInteractionMovement.current;
				if (canvasRef.current) {
					canvasRef.current.style.cursor = "grabbing";
				}
			}}
			onPointerUp={() => {
				pointerInteracting.current = null;
				if (canvasRef.current) {
					canvasRef.current.style.cursor = "grab";
				}
			}}
			onPointerOut={() => {
				pointerInteracting.current = null;
				if (canvasRef.current) {
					canvasRef.current.style.cursor = "grab";
				}
			}}
			onMouseMove={(e) => {
				if (pointerInteracting.current !== null) {
					const delta = e.clientX - pointerInteracting.current;
					pointerInteractionMovement.current = delta;
					api.start({
						r: delta / 200,
					});
				}
			}}
			onTouchMove={(e) => {
				if (pointerInteracting.current !== null && e.touches[0]) {
					const delta = e.touches[0].clientX - pointerInteracting.current;
					pointerInteractionMovement.current = delta;
					api.start({
						r: delta / 100,
					});
				}
			}}
			style={{
				width: "100%",
				height: "100%",
				cursor: "grab",
				contain: "layout paint size",
				opacity: 0,
				transition: "opacity 1s ease",
			}}
		/>
	);
}
