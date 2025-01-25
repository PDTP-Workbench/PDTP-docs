"use client";

import { LINKS, type LinkType } from "@/constants/links";
import clsx from "clsx";
import { ChevronUp } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const SidebarLink = ({
	label,
	href,
	isCurrent,
	level,
}: LinkType & {
	isCurrent: boolean;
	level: number;
}) => {
	return (
		<Link
			href={href}
			style={{
				paddingLeft: `${(level + 1) * 2}rem`,
			}}
			className={clsx(
				"w-full hover:text-2xl transition-all text-xl px-2 py-1 relative  before:w-full  before:h-full before:contents-[''] before:absolute before:left-0 before:top-0 hover:before:-translate-x-full before:transition-all before:duration-300 overflow-hidden",
				isCurrent ? "before:bg-transparent" : "before:bg-slate-300/5",
			)}
		>
			<div className="flex items-center gap-2  before:w-full before:contents-[''] before:absolute before:left-0 before:top-0">
				<span>{label}</span>
			</div>
		</Link>
	);
};

const SidebarLinkWithChildLinks = ({
	label,
	href,
	childLinks,
	currentPath,
	level,
}: LinkType & {
	currentPath: string;
	level: number;
}) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className={"flex flex-col"}>
			<div className={clsx("flex flex-row relative")}>
				<SidebarLink
					label={label}
					href={href}
					level={level}
					isCurrent={href === currentPath}
				/>
				<button
					type="button"
					onClick={() => setIsOpen(!isOpen)}
					className={clsx("absolute right-0 top-1/2 -translate-y-1/2")}
				>
					<ChevronUp
						size={24}
						className={clsx(
							"transform transition-transform h-full",
							isOpen ? "" : "rotate-180",
						)}
					/>
				</button>
			</div>
			{isOpen && (
				<div className=" flex flex-col">
					{childLinks?.map((link) => {
						if (link.childLinks) {
							return (
								<SidebarLinkWithChildLinks
									currentPath={currentPath}
									key={link.label}
									{...link}
									level={level + 1}
								/>
							);
						}
						return (
							<SidebarLink
								isCurrent={link.href === currentPath}
								key={link.label}
								{...link}
								level={level + 1}
							/>
						);
					})}
				</div>
			)}
		</div>
	);
};
export const Sidebar = () => {
	const currentPath = usePathname();
	return (
		<aside className="hidden md:flex flex-col w-1/4 h-screen fixed">
			<div className="flex flex-col">
				{LINKS.map((link) =>
					link.childLinks ? (
						<SidebarLinkWithChildLinks
							currentPath={currentPath}
							key={link.label}
							{...link}
							level={0}
						/>
					) : (
						<SidebarLink
							isCurrent={currentPath === link.href}
							key={link.label}
							{...link}
							level={0}
						/>
					),
				)}
			</div>
			<div className="w-full h-full bg-slate-300/5" />
		</aside>
	);
};
