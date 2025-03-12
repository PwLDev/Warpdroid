import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld(
    "WarpdroidApp",
    {
        platform: process.platform
    }
);