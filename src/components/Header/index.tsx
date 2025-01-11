import clsx from "clsx";
import { Z_INDEX } from "../../constants";
import { GithubIcon } from "../icons/Github";

export const Header = () => {
	return (
		<header
			className={clsx(
				"fixed top-0 left-0 w-full backdrop-blur-sm",
				Z_INDEX.NAVBAR,
			)}
		>
			<div className="flex items-center px-4">
				<div className=" w-full">
					<h1 className="text-2xl font-bold">
						<span>P</span>
						<span className=" text-sm">ortable</span>
						<span> D</span>
						<span className=" text-sm">ocument</span>
						<span> T</span>
						<span className=" text-sm">ransfer</span>
						<span> P</span>
						<span className=" text-sm">rotocol</span>
					</h1>
				</div>
				<a href="https://github.com/pdtp-workbench">
					<GithubIcon />
				</a>
			</div>
		</header>
	);
};
