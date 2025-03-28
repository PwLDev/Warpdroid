import { app, contextBridge, dialog, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld(
    "versions",
    {
        chromium: process.versions.chrome,
        electron: process.versions.electron,
        node: process.versions.node
    }
);

contextBridge.exposeInMainWorld(
    "projects",
    {
        load: () => ipcRenderer.send("requestProject")
    }
);

contextBridge.exposeInMainWorld(
    "warpdroid",
    {
        on: (channel: string, callback: Function) => {
            ipcRenderer.on(channel, (_, data) => callback(data));
        }
    }
)