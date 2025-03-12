import {
    app,
    BrowserWindow
} from "electron";
import path from "node:path";

app.whenReady().then(() => initApp());

app.on("window-all-closed", () => {
    if (process.platform == "darwin") {
        app.quit();
    }
});

const initApp = () => {
    const window = new BrowserWindow({
        title: "Warpdroid",
        width: 700,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            preload: path.join(__dirname, "preload.js")
        }
    });

    window.loadFile(path.join(__dirname, "../static/index.html"));
}