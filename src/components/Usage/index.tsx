import { clientSample, goServerSample } from "../../constants/sample";
import { CodeBlock } from "../ui/CodeBlock";

export const Usage = () => {
	return (
		<div className="flex flex-col gap-8">
			<h2 className="text-4xl">Usage</h2>
			<div>
				<h3 className="text-3xl">Web Client</h3>
				<p>
					Usage of the package is simple. Just import the package and use it as
					shown below:
				</p>
				<CodeBlock>{clientSample}</CodeBlock>
			</div>
			<div>
				<h3 className="text-3xl">API Server with Golang</h3>
				<p>
					Usage of the package is simple. Just import the package and use it as
					shown below:
				</p>
				<CodeBlock>{goServerSample}</CodeBlock>
			</div>
		</div>
	);
};
