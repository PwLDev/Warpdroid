import { app, dialog, Menu, Notification, pushNotifications, shell } from "electron";
import fs from "node:fs";

import { projectDialog } from "./renderer";
import { AbstractWindow } from "./window";

export class WarpdroidMenu {
    static getMenu(mainWindow: AbstractWindow) {
        const { window } = mainWindow;

        return Menu.buildFromTemplate([
            {
                role: "appMenu",
                label: app.getName(),
                submenu: [
                    {
                        label: "About",
                        role: "about"
                    },
                    {
                        label: "Preferences",
                        accelerator: process.platform == "darwin" ? "Command+," : "Ctrl+,"
                    },
                    {
                        label: "Quit",
                        accelerator: process.platform == "darwin" ? "Command+Q" : "Alt+F4",
                        click: () => app.quit()
                    }
                ]
            },
            {
                label: "File",
                role: "fileMenu",
                submenu: [
                    {
                        label: "New Project",
                        accelerator: process.platform == "darwin" ? "Command+Shift+N" : "Ctrl+Shift+N"
                    },
                    {
                        label: "Open Project",
                        accelerator: process.platform == "darwin" ? "Command+Shift+O" : "Ctrl+Shift+O",
                        click: async () => {
                            const file = await projectDialog();
                            const path = file.filePaths[0];
                            if (path && path.length > 0) {
                                window.webContents.send("openProject", fs.readFileSync(path, { encoding: "utf-8" }))
                            }
                        }
                    },
                    {
                        label: "Open Recents",
                        type: "submenu",
                        submenu: []
                    },
                    {
                        label: "Close Project",
                        accelerator: process.platform == "darwin" ? "Command+Shift+Q" : "Ctrl+Shift+Q"
                    }
                ]
            },
            {   
                label: "View",
                role: "viewMenu"
            },
            {
                label: "Help",
                role: "help",
                submenu: [
                    {
                        label: "Warpdroid Wiki",
                        type: "normal",
                        click: () => shell.openExternal("https://github.com/PwLDev/Warpdroid/tree/main")
                    },
                    {
                        label: "GitHub Repo",
                        type: "normal",
                        click: () => shell.openExternal("https://github.com/PwLDev/Warpdroid/tree/main")
                    }
                ]
            }
        ]);
    }
}