import { Sidebar } from "@/components/Sidebar";

export const dynamic = "force-static";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex flex-row">
			<Sidebar />

			<div className="ml-[30%] mr-8">
				<article className="prose dark:prose-invert max-w-full">
					{children}
				</article>
			</div>
		</div>
	);
}
