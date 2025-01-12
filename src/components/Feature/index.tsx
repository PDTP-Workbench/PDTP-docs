import { PDTP_FEATURES } from "../../constants";

export const Feature = () => {
	return (
		<ul className="grid md:grid-cols-3 grid-cols-1 gap-3">
			{PDTP_FEATURES.map((feature) => {
				return (
					<li
						key={feature.title}
						className="flex flex-col items-center justify-between gap-4 text-center border border-gray-600 p-4 rounded-md"
					>
						<h2 className=" font-bold">{feature.title}</h2>
						<p>{feature.description}</p>
					</li>
				);
			})}
		</ul>
	);
};
