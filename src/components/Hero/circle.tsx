import type { FC } from "react";

type Position = {
	x: number;
	y: number;
	r: number;
	width: number;
	height: number;
};
interface AnimatedSquaresProps {
	positions: Position[];
}

export const AnimatedSquares: FC<AnimatedSquaresProps> = ({ positions }) => {
	return (
		<svg
			width="300"
			height="200"
			viewBox="0 -1 4 4"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Animated Squares</title>
			<ellipse
				cx="4.5"
				cy="0.5"
				rx="0.2"
				ry="0.7"
				rotate={45}
				stroke="white"
				strokeWidth={0.05}
			>
				<animate
					attributeName="rx"
					from="0"
					to="0.2"
					dur="0.5s"
					begin="0s"
					fill="freeze"
					direction="alternate"
					calcMode="spline"
					keyTimes="0;1"
					keySplines="0.42 0 0.58 1"
				/>
				<animate
					attributeName="ry"
					from="0"
					to="0.7"
					dur="0.5s"
					begin="0s"
					fill="freeze"
					direction="alternate"
					calcMode="spline"
					keyTimes="0;1"
					keySplines="0.42 0 0.58 1"
				/>
				<animate
					attributeName="rx"
					to="0"
					from="0.2"
					dur="0.5s"
					begin="2.5s"
					fill="freeze"
					direction="alternate"
					calcMode="spline"
					keyTimes="0;1"
					keySplines="0.42 0 0.58 1"
				/>
				<animate
					attributeName="ry"
					to="0"
					from="0.7"
					dur="0.5s"
					begin="2.5s"
					fill="freeze"
					direction="alternate"
					calcMode="spline"
					keyTimes="0;1"
					keySplines="0.42 0 0.58 1"
				/>
			</ellipse>
			{positions.map((position, index) => (
				<rect
					key={`${position.x},${position.y}`}
					width={position.width}
					height={position.height}
					fill="transparent"
				>
					<animate
						attributeName="fill"
						dur="0.1s"
						begin={`${index * 0.1 + 0.32 + 0.5}s`}
						repeatCount="1"
						values="transparent;white"
						fill="freeze"
					/>
					<animate
						attributeName="fill"
						dur="1s"
						begin={"3.5s"}
						repeatCount="1"
						values="white;transparent"
						fill="freeze"
					/>
					<animateMotion
						dur="1s"
						begin={`${index * 0.1 + 0.5}s`}
						repeatCount="1"
						path={`M6,1 Q${(6 - position.x) / 2},${position.y - 1} ${
							position.x
						},${-position.y}`}
						calcMode="spline"
						keyTimes="0;1"
						keySplines="0.42 0 0.58 1"
						fill="freeze"
					/>
				</rect>
			))}
		</svg>
	);
};
