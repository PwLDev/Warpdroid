import React from "react";
import "./styles/layout.css";

function App() {
	const requestOpenProject = () => {
		const file = window.projects.load();
		if (!file) return;

		window.warpdroid.on("openProject", (file: string) => {
			console.log(file);
		});
	}

	return (
		<div className="App">
			<h1>Welcome to Warpdroid</h1>
			<p>
				App is running in Electron v
				{
					window.versions.electron
				}
			</p>
			<button
				onClick={requestOpenProject}>
				Open project
			</button>
		</div>
	);
}

export default App;
