import type { MDXComponents } from "mdx/types";
import { CodeBlock } from "./components/ui/CodeBlock";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,

		h2: (props) => {
			return (
				<h2>
					<a href={`#${props.children}`} className=" no-underline">
						{props.children}
					</a>
				</h2>
			);
		},
		h3: (props) => {
			return (
				<h3>
					<a
						href={`
					#${props.children}`}
						className=" no-underline"
					>
						{props.children}
					</a>
				</h3>
			);
		},
		code: (props) => {
			return <code>{props.children}</code>;
		},
		pre: (props) => {
			if (props.children.props.className) {
				return (
					<CodeBlock language={props.children.props.className.split("-")[1]}>
						{props.children.props.children}
					</CodeBlock>
				);
			}
			if (typeof props.children === "string") {
				return <pre {...props} />;
			}
			return <>{props.children}</>;
		},
	};
}
