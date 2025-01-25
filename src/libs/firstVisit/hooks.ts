import { useEffect, useState } from "react";

export const useFirstVisit = () => {
	const [firstVisit, setFirstVisit] = useState<boolean>(true);

	const visit = () => {
		localStorage.setItem("visited", "true");
		setFirstVisit(false);
	};
	const reset = () => {
		localStorage.setItem("visited", "false");
		setFirstVisit(true);
	};

	useEffect(() => {
		const visited = localStorage.getItem("visited") === "true";
		if (visited) {
			setFirstVisit(false);
		} else {
			setFirstVisit(true);
		}
	}, []);
	return { firstVisit: firstVisit, visit, reset };
};
