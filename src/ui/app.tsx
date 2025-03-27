import React from "react";
import "./styles/layout.css";

declare global {
	interface Window {
		versions: {
			chromium: string,
			electron: string,
			node: string
		}
	}
}

function App() {
	return (
		<div className="App">
			<h1>Welcome to Warpdroid</h1>
			<p>
				App is running in Electron v
				{
					window.versions.electron
				}
			</p>
		</div>
	);
}

export default App;
