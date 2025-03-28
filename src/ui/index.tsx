import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

import "./styles/layout.css";

declare global {
	interface Window {
		projects: {
			load: () => Promise<string | null>;
		},
		versions: {
			chromium: string,
			electron: string,
			node: string
		},
		warpdroid: {
			on: (channel: string, callback: Function) => any;
		},
	}
}

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
