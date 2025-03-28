/**
 * This file is made for Create React App
 * This imports all the React app so it can make a production build correctly.
 */

import "./ui";

/**
 * This defines the context bridge methods and properties to the React frontend.
 */
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