import { FileText } from "lucide-react";
import Link from "next/link";
import type { FC } from "react";
import { PDTP_OVERVIEW } from "../../constants";
import { AnimatedSquares } from "./circle";
import { PDTP } from "./pdtp";

export const Hero: FC = () => {
	return (
		<section className="h-screen flex flex-col justify-center w-full">
			<span className="flex flex-col items-center w-full gap-10">
				<h1 className="w-[300px] overflow-hidden h-[200px] md:ml-12 md:mt-32 ml-4 mt-32  text-6xl font-bold flex relative scale-[120%] md:scale-[200%]">
					<span className="absolute scale-[44%] top-[-8px] left-[-77px] text-white">
						<PDTP />
					</span>
					<AnimatedSquares
						positions={[
							// P
							{
								x: 0,
								y: 0,
								r: 0,
								width: 0.1,
								height: 0.7,
							},
							{
								x: 0.1,
								y: 0,
								r: 0,
								width: 0.3,
								height: 0.1,
							},
							{
								x: 0.4,
								y: -0.1,
								r: 0,
								width: 0.1,
								height: 0.2,
							},
							{
								x: 0.1,
								y: -0.3,
								r: 0,
								width: 0.3,
								height: 0.1,
							},
							// D
							{
								x: 1,
								y: 0,
								r: 0,
								width: 0.1,
								height: 0.7,
							},
							{
								x: 1.1,
								y: 0,
								r: 0,
								width: 0.2,
								height: 0.1,
							},
							{
								x: 1.3,
								y: -0.1,
								r: 0,
								width: 0.1,
								height: 0.1,
							},
							{
								x: 1.4,
								y: -0.2,
								r: 0,
								width: 0.1,
								height: 0.3,
							},
							{
								x: 1.3,
								y: -0.5,
								r: 0,
								width: 0.1,
								height: 0.1,
							},
							{
								x: 1.1,
								y: -0.6,
								r: 0,
								width: 0.2,
								height: 0.1,
							},
							{
								x: 2,
								y: 0,
								r: 0,
								width: 0.5,
								height: 0.1,
							},
							{
								x: 2.2,
								y: -0.1,
								r: 0,
								width: 0.1,
								height: 0.6,
							},
							// P
							{
								x: 3,
								y: 0,
								r: 0,
								width: 0.1,
								height: 0.7,
							},
							{
								x: 3.1,
								y: 0,
								r: 0,
								width: 0.3,
								height: 0.1,
							},
							{
								x: 3.4,
								y: -0.1,
								r: 0,
								width: 0.1,
								height: 0.2,
							},
							{
								x: 3.1,
								y: -0.3,
								r: 0,
								width: 0.3,
								height: 0.1,
							},
						]}
					/>
				</h1>
				<p className="text-xl max-w-5xl font-bold px-6">{PDTP_OVERVIEW}</p>
				<div className="flex flex-row gap-4 items-center">
					<Link
						href="/docs/getting-started"
						className="cursor-pointer group overflow-hidden relative rounded-md border-2 border-white px-4 py-2 font-bold"
					>
						<svg
							width="100%"
							height="100%"
							id="svg"
							viewBox="0 0 1440 690"
							xmlns="http://www.w3.org/2000/svg"
							className="transition ease-in-out delay-150 absolute bottom-0 left-0 scale-[300%] duration-500 group-hover:translate-x-8 translate-y-[150%] group-hover:-translate-y-full"
						>
							<title>Getting Started</title>
							<path
								d="M 0,700 L 0,262 C 42.39511859944871,187.34181401030511 84.79023719889742,112.68362802061023 112,131 C 139.20976280110258,149.31637197938977 151.234169803859,260.6073019278643 179,323 C 206.765830196141,385.3926980721357 250.27308358566654,398.8871642679326 289,363 C 327.72691641433346,327.1128357320674 361.67349585347495,241.8440410004055 387,234 C 412.32650414652505,226.1559589995945 429.0329330004338,295.73667173044544 463,314 C 496.9670669995662,332.26332826955456 548.1947721447898,299.20927207781284 586,321 C 623.8052278552102,342.79072792218716 648.1879784204069,419.42623995830314 674,374 C 699.8120215795931,328.57376004169686 727.0533141735827,161.08576808897465 760,140 C 792.9466858264173,118.91423191102537 831.5987648852619,244.23068768579833 863,259 C 894.4012351147381,273.76931231420167 918.5516262853703,177.991481167832 948,190 C 977.4483737146297,202.008518832168 1012.1947299732569,321.80338764287376 1052,343 C 1091.805270026743,364.19661235712624 1136.6694538216013,286.794968260673 1164,247 C 1191.3305461783987,207.205031739327 1201.127454740338,205.01673931443423 1230,195 C 1258.872545259662,184.98326068556577 1306.8207272170462,167.1380744815902 1345,177 C 1383.1792727829538,186.8619255184098 1411.589636391477,224.4309627592049 1440,262 L 1440,700 L 0,700 Z"
								stroke="none"
								strokeWidth="0"
								fill="#ffffff"
								fillOpacity="1"
								className="transition-all duration-300 ease-in-out delay-150 path-0"
							/>
						</svg>
						<span className="text-white group-hover:text-black z-10 relative duration-300 delay-200">
							Getting Started
						</span>
					</Link>
					<Link
						href="/docs"
						className="cursor-pointer rounded-md  px-4 py-2 font-bold hover:bg-slate-200/10 duration-200"
					>
						<span className="flex flex-row items-center gap-2 ">
							<FileText />
							Documents
						</span>
					</Link>
				</div>
			</span>
		</section>
	);
};
