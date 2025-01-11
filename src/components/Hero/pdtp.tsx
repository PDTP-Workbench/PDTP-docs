import type { FC } from "react";

type Props = {
	animate: boolean;
};
export const PDTP: FC<Props> = ({ animate }) => {
	return (
		<svg
			width="450"
			height="150"
			viewBox="0 0 450 83"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>PDTP</title>
			<path
				d="M7.5 81V41.5M7.5 41.5V8H40.5L48.5 11.5L53 18L54 24L53 30L48.5 37.5L42 41.5H7.5ZM227.5 8H256.5M256.5 8H284.5M256.5 8V81M348.5 83V43.5M348.5 43.5V10H381.5L389.5 13.5L394 20L395 26L394 32L389.5 39.5L383 43.5H348.5ZM120.5 8V75.3464H141.5L150.5 72L157.5 67L163 60.5L166 53V29.5L163 22.5L158 16.5L150.5 11.5L141.5 8H120.5Z"
				strokeWidth={animate ? "0" : "15"}
				stroke={animate ? "transparent" : "white"}
			>
				{animate && (
					<animate
						attributeName="stroke-width"
						from="0"
						to="15"
						dur="1s"
						fill="freeze"
						direction="alternate"
						begin={"3s"}
						repeatCount="1"
					/>
				)}
				{animate && (
					<animate
						attributeName="stroke"
						from="transparent"
						to="white"
						dur="0.1s"
						begin={"3s"}
						fill="freeze"
						repeatCount="1"
					/>
				)}
			</path>
			<text
				fill={animate ? "transparent" : "white"}
				x="12%"
				y="90%"
				dominantBaseline="middle"
				textAnchor="middle"
				fontSize="16"
			>
				ortable
				{animate && (
					<animate
						attributeName="fill"
						values="transparent;white"
						dur="1s"
						begin={"3s"}
						fill="freeze"
						repeatCount="1"
					/>
				)}
			</text>
			<text
				fill={animate ? "transparent" : "white"}
				x="45%"
				y="90%"
				dominantBaseline="middle"
				textAnchor="middle"
				fontSize="16"
			>
				ocument
				{animate && (
					<animate
						attributeName="fill"
						values="transparent;white"
						dur="1s"
						begin={"3s"}
						fill="freeze"
						repeatCount="1"
					/>
				)}
			</text>
			<text
				fill={animate ? "transparent" : "white"}
				x="67%"
				y="90%"
				dominantBaseline="middle"
				textAnchor="middle"
				fontSize="16"
			>
				ransfer
				{animate && (
					<animate
						attributeName="fill"
						values="transparent;white"
						dur="1s"
						begin={"3s"}
						fill="freeze"
						repeatCount="1"
					/>
				)}
			</text>
			<text
				fill={animate ? "transparent" : "white"}
				x="88%"
				y="90%"
				dominantBaseline="middle"
				textAnchor="middle"
				fontSize="16"
			>
				rotocol
				{animate && (
					<animate
						attributeName="fill"
						values="transparent;white"
						dur="1s"
						begin={"3s"}
						fill="freeze"
						repeatCount="1"
					/>
				)}
			</text>
		</svg>
	);
};
