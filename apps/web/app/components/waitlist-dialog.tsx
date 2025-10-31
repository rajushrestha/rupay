"use client";

import { Button } from "@workspace/ui/components/button";
import { ChevronRightIcon, XIcon } from "lucide-react";
import { Input } from "@workspace/ui/components/input";
import { useState, useEffect, useRef } from "react";
import { cn } from "@workspace/ui/lib/utils";

export function WaitlistDialog() {
	const [waitlistOpen, setWaitlistOpen] = useState(false);
	const [email, setEmail] = useState("");
	const [count, setCount] = useState<number | null>(null);
	const [status, setStatus] = useState<
		"idle" | "submitting" | "success" | "error"
	>("idle");
	const [message, setMessage] = useState("");
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);
	const overlayRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		fetch("/api/waitlist")
			.then((res) => res.json())
			.then((d: { count?: number }) => {
				if (typeof d?.count === "number") setCount(d.count);
			})
			.catch(() => {});
	}, []);

	// Handle ESC key to close
	useEffect(() => {
		if (!waitlistOpen) return;

		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setWaitlistOpen(false);
			}
		};

		document.addEventListener("keydown", handleEscape);
		// Prevent body scroll when modal is open
		document.body.style.overflow = "hidden";

		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.body.style.overflow = "";
		};
	}, [waitlistOpen]);

	// Reset form state when dialog closes
	const handleClose = () => {
		setWaitlistOpen(false);
		// Clear any existing timeout
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		// Reset form state when closing
		timeoutRef.current = setTimeout(() => {
			setEmail("");
			setStatus("idle");
			setMessage("");
			timeoutRef.current = null;
		}, 200); // Wait for animation to complete
	};

	// Handle click outside to close
	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === overlayRef.current) {
			handleClose();
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

	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			setStatus("error");
			setMessage("Please enter a valid email address.");
			return;
		}

		setStatus("submitting");
		setMessage("");

		try {
			const res = await fetch("/api/waitlist", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email }),
			});

			const data = await res.json();

			if (!res.ok) {
				throw new Error(data.error || "Failed to join waitlist");
			}

			setStatus("success");
			setMessage("You're on the list! 🎉");
			setEmail("");

			if (typeof data?.count === "number") setCount(data.count);
		} catch (e: unknown) {
			setStatus("error");
			const messageFromError =
				e &&
				typeof e === "object" &&
				"message" in e &&
				typeof (e as { message?: string }).message === "string"
					? (e as { message: string }).message
					: "Something went wrong. Please try again.";
			setMessage(messageFromError);
			console.error("Join waitlist failed", e);
		}
	}

	return (
		<>
			<Button size="xl" onClick={() => setWaitlistOpen(true)}>
				<span>Get Early Access</span>
				<ChevronRightIcon />
			</Button>

			{waitlistOpen && (
				<div
					ref={overlayRef}
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 transition-opacity duration-200"
					style={{ opacity: 1 }}
					onClick={handleOverlayClick}
					role="dialog"
					aria-modal="true"
					aria-labelledby="waitlist-title"
					aria-describedby="waitlist-description"
				>
					<div className="bg-background relative w-full max-w-md rounded-lg border p-6 shadow-lg transition-all duration-200 scale-100">
						<button
							onClick={handleClose}
							className="absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden"
							aria-label="Close"
						>
							<XIcon className="size-4" />
						</button>

						<div className="space-y-4">
							<div className="space-y-2">
								<h2
									id="waitlist-title"
									className="text-2xl font-semibold leading-none"
								>
									Join the Waitlist
								</h2>
								<p
									id="waitlist-description"
									className="text-md text-muted-foreground"
								>
									Be among the first to experience Rupay. We&apos;ll notify you
									when we launch.
								</p>
							</div>

							<div className="space-y-4 pt-4">
								<form
									onSubmit={onSubmit}
									className="mx-auto w-full grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 text-left"
								>
									<Input
										type="email"
										name="email"
										placeholder="you@company.com"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
										disabled={status === "submitting"}
										autoComplete="off"
										className="rounded-full px-4"
									/>
									<Button
										type="submit"
										className="sm:self-stretch"
										disabled={status === "submitting"}
									>
										{status === "submitting" ? "Joining…" : "Join Waitlist"}
									</Button>
									{message && status !== "success" && (
										<div
											className={cn(
												"sm:col-span-2 text-sm text-center",
												status === "error"
													? "text-destructive"
													: "text-muted-foreground",
											)}
											role={status === "error" ? "alert" : undefined}
										>
											{message}
										</div>
									)}
								</form>
								<div className="flex items-center justify-center gap-3 flex-wrap">
									<div className="flex -space-x-2.5">
										<div className="w-8 h-8 rounded-full bg-blue-700 border-2 border-white flex items-center justify-center text-white text-xs font-medium">
											M
										</div>
										<div className="w-8 h-8 rounded-full bg-emerald-700 border-2 border-white flex items-center justify-center text-white text-xs font-medium">
											B
										</div>
										<div className="w-8 h-8 rounded-full bg-purple-700 border-2 border-white flex items-center justify-center text-white text-xs font-medium">
											S
										</div>
									</div>
									<span className="text-slate-600 text-sm dark:text-slate-400">
										{typeof count === "number" ? count : "…"} people already
										joined.
									</span>
									{status === "success" && message && (
										<span className="text-emerald-600 text-sm -ms-1 dark:text-emerald-500">
											{message}
										</span>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
