"use client";
import { Feature } from "../components/Feature";
import { Hero } from "../components/Hero";
import Usage from "./Usage.mdx";
export default function Home() {
	return (
		<>
			<Hero />
			<div className=" w-full flex justify-center items-center">
				<div className=" flex-col w-3/4 flex gap-16  ">
					<Feature />
					<article className="prose dark:prose-invert max-w-full">
						<Usage />
					</article>
				</div>
			</div>
		</>
	);
}
