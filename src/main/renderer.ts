import { dialog, ipcMain } from "electron"; 
import fs from "node:fs";

export const projectDialog = async () => {
    return dialog.showOpenDialog({
        buttonLabel: "Open",
        properties: ["openFile"],
        title: "Select a project",
        filters: [
            {
                name: "Warpdroid Project",
                extensions: ["json", "wdpk"]
            }
        ]
    });
}

export const gameDialog = async () => {
    return dialog.showOpenDialog({
        buttonLabel: "Load",
        properties: ["openFile"],
        title: "Select a Scratch project",
        filters: [
            {
                name: "Scratch Project",
                extensions: ["html", "sb3", "sb2", "sb", "zip"]
            }
        ]
    });
}

export const registerListeners = () => {
    ipcMain.on("requestProject", async (event) => {
        const file = await projectDialog();
        const path = file.filePaths[0];
        if (path && path.length > 0) {
            event.reply("openProject", fs.readFileSync(path, { encoding: "utf-8" }))
        }
    });
}