import { createContext, useContext } from "react";

type FirstVisit = {
	firstVisit: boolean;
	setFirstVisit: (firstVisit: boolean) => void;
};
const firstVisitContext = createContext<FirstVisit>({
	firstVisit: true,
	setFirstVisit: () => {},
});

export const useFirstVisit = () => {
	const context = useContext(firstVisitContext);
	if (!context) {
		throw new Error("useFirstVisit must be used within a FirstVisitProvider");
	}
	const visit = () => {
		context.setFirstVisit(true);
		localStorage.setItem("visited", "true");
	};
	const reset = () => {
		context.setFirstVisit(false);
		localStorage.setItem("visited", "false");
	};
	return { firstVisit: context.firstVisit, visit, reset };
};

export const FirstVisitWrapper = firstVisitContext.Provider;
