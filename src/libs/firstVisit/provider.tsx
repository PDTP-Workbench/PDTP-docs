import { useEffect, useState } from "react";
import { FirstVisitWrapper } from "./hooks";

export const FirstVisitProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [firstVisit, setFirstVisit] = useState<boolean | undefined>(undefined);
	useEffect(() => {
		const visited = localStorage.getItem("visited") === "true";
		if (visited) {
			setFirstVisit(false);
		} else {
			setFirstVisit(true);
			localStorage.setItem("visited", "true");
		}
	}, []);
	if (firstVisit === undefined) {
		return null;
	}
	return (
		<FirstVisitWrapper value={{ firstVisit, setFirstVisit }}>
			{children}
		</FirstVisitWrapper>
	);
};
