import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { FirstVisitProvider } from "./libs/firstVisit/index.ts";

// biome-ignore lint/style/noNonNullAssertion: root element is always present
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<FirstVisitProvider>
			<App />
		</FirstVisitProvider>
	</StrictMode>,
);
