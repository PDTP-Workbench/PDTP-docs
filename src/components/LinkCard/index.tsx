import type { LinkType } from "@/constants/links";
import Link from "next/link";

export const LinkCard = (link: LinkType & { description: string }) => {
	return (
		<Link
			className="p-4 border-2 hover:bg-slate-100/10 duration-300 hover:scale-105 border-white/20 no-underline flex flex-col rounded-md"
			href={link.href}
		>
			<strong>{link.label}</strong>
			<span>{link.description}</span>
		</Link>
	);
};

export const LinkCards = ({
	links,
}: { links: (LinkType & { description: string })[] }) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
			{links.map((link) => (
				<LinkCard key={link.label} {...link} />
			))}
		</div>
	);
};
