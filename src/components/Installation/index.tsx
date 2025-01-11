import { CodeBlock } from "../ui/CodeBlock";

export const Installation = () => {
	return (
		<div className="flex flex-col gap-8">
			<h2 className="text-4xl">Installation</h2>
			<div>
				<h3 className="text-3xl">Web Client</h3>
				<p>Install the package via npm:</p>
				<CodeBlock>npm install @pdtp/client</CodeBlock>
			</div>
			<div>
				<h3 className="text-3xl">API Server with Golang</h3>
				<p>Install the package via go:</p>
				<CodeBlock>go get github.com/pdtp-workbench/pdtp-go</CodeBlock>
			</div>
		</div>
	);
};
