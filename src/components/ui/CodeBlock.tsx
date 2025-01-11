import clsx from "clsx";
import { type FC, useState } from "react";
import { Z_INDEX } from "../../constants";

type Props = {
	children: string;
};
export const CodeBlock: FC<Props> = ({ children }) => {
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
					"bg-gray-800 z-0 relative text-white p-4 rounded-lg overflow-auto",
					Z_INDEX.BASE,
				)}
			>
				<code>{children}</code>
			</pre>
			<button
				onClick={handleCopy}
				type="button"
				className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-1 rounded-lg"
			>
				{copied ? "Copied!" : "Copy"}
			</button>
		</div>
	);
};
