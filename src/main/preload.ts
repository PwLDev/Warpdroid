import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld(
    "versions",
    {
        chromium: process.versions.chrome,
        electron: process.versions.electron,
        node: process.versions.node
    }
);