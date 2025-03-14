import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld(
    "warpdroid",
    {
        platform: process.platform
    }
);