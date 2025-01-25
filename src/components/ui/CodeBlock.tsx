"use client";
import clsx from "clsx";
import { type FC, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism";

import theme from "react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus";
import { Z_INDEX } from "../../constants";

type Props = {
	children: string;
	language?: "language-bash" | "language-typescript" | "language-go";
};
export const CodeBlock: FC<Props> = ({
	children,
	language = "language-bash",
}) => {
	const [copied, setCopied] = useState(false);
	const handleCopy = () => {
		navigator.clipboard.writeText(children);
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 2000);
	};

	return (
		<div className={"relative"}>
			<pre
				className={clsx(
					" z-0 relative text-white p-4 rounded-lg overflow-auto border border-gray-600 bg-slate-50/5",
					Z_INDEX.BASE,
				)}
			>
				<SyntaxHighlighter
					style={theme}
					language={language}
					customStyle={{
						backgroundColor: "transparent",
					}}
				>
					{children}
				</SyntaxHighlighter>
			</pre>
			<button
				onClick={handleCopy}
				type="button"
				className="absolute top-2 right-2 text-white px-2 py-1 rounded-lg border border-gray-600"
			>
				{copied ? "Copied!" : "Copy"}
			</button>
		</div>
	);
};
