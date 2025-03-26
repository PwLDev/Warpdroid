import { app } from "electron";
import isDev from "electron-is-dev";
import path from "node:path";

import { AbstractWindow } from "./window.js";

const initWindow = () => {
    const window = new AbstractWindow({
        title: "Warpdroid"
    });

    // load contents
    window.loadURL(
        isDev ?
        "http://localhost:3000" :
        "file://" + path.join(__dirname, "../ui/index.html")
    );
}

app.whenReady().then(initWindow);

app.on("window-all-closed", () => {
    // Close app on MacOS
    if (process.platform == "darwin") {
        app.quit();
    }
});

app.setAboutPanelOptions({
    applicationName: "Warpdroid",
    applicationVersion: process.env.npm_package_version || "v0.2.0",
    authors: ["PwLDev", "Dogo6647"],
    iconPath: path.join(__dirname, "../ui/static/warpdroid.png"),
    version: "6",
    website: "https://github.com/PwLDev/Warpdroid"
});