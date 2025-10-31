import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/jpeg";

export default async function Image() {
	// Read the image file from the public directory
	const imagePath = join(process.cwd(), "public", "assets", "landing", "abstract-1.png");
	const imageBuffer = await readFile(imagePath);
	const imageBase64 = imageBuffer.toString("base64");
	const imageDataUrl = `data:image/png;base64,${imageBase64}`;

	return new ImageResponse(
		(
			<div
				style={{
					fontSize: 60,
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					padding: "0",
					fontFamily: "system-ui, -apple-system",
					position: "relative",
				}}
			>
				{/** biome-ignore lint/performance/noImgElement: Not important for opengraph image */}
				<img
					src={imageDataUrl}
					alt="Abstract background"
					width={1200}
					height={630}
					style={{
						position: "absolute",
						inset: 0,
						width: "100%",
						height: "100%",
						objectFit: "cover",
					}}
				/>
				<div
					style={{
						position: "absolute",
						inset: 0,
						background: "rgba(0, 0, 0, 0.4)",
					}}
				/>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: "40px",
						position: "relative",
						zIndex: 1,
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "40px",
						}}
					>
						{/** biome-ignore lint/a11y/noSvgWithoutTitle: No title needed */}
						<svg
							width="60"
							height="60"
							viewBox="0 0 120 124"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M29.2214 0.840214L0.631104 122.5H18.8249L43.2567 18.4913C70.2875 20.5679 86.4887 39.0842 91.6003 48.6019L52.0937 68.3296C80.7879 84.3194 98.0114 111.078 103.036 122.5L118.631 113.674C109.066 94.777 90.6473 77.5878 83.2831 70.9254L114.473 55.87C94.0955 6.44702 49.0614 -1.40943 29.2214 0.840214Z"
								fill="#ffffff"
							/>
						</svg>
						<div
							style={{
								fontSize: 72,
								fontWeight: "bold",
								color: "#ffffff",
							}}
						>
							Rupay
						</div>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							gap: "20px",
							textAlign: "center",
						}}
					>
						<div
							style={{
								fontSize: 56,
								fontWeight: "bold",
								color: "#ffffff",
								lineHeight: 1.2,
							}}
						>
							Rupay as Merchant of Record
						</div>
						<div
							style={{
								fontSize: 32,
								color: "#ffffff",
								maxWidth: "900px",
								opacity: 0.9,
							}}
						>
							Handle all international tax compliance globally. Focus on building great software.
						</div>
					</div>
				</div>
			</div>
		),
		{
			...size,
		}
	);
}
