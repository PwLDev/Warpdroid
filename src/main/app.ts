import { app, Menu } from "electron";
import isDev from "electron-is-dev";
import path from "node:path";

import { WarpdroidMenu } from "./menu.js";
import { registerListeners } from "./renderer.js";
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

    Menu.setApplicationMenu(WarpdroidMenu.getMenu(window));
}

app.whenReady()
    .then(registerListeners)
    .then(initWindow);

app.on("window-all-closed", () => {
    // Close app on MacOS
    if (process.platform == "darwin") {
        app.quit();
    }
});

app.setAboutPanelOptions({
    applicationName: "Warpdroid",
    applicationVersion: process.env.npm_package_version,
    authors: ["PwLDev", "Dogo6647"],
    iconPath: path.join(__dirname, "../ui/static/warpdroid.png"),
    website: "https://github.com/PwLDev/Warpdroid"
});