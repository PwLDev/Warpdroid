import { BrowserWindow, BrowserWindowConstructorOptions, Event, Input, Menu, Rectangle, screen } from "electron";
import path from "node:path";

import { WarpdroidMenu } from "./menu";

interface AbstractWindowOptions {
    title?: string;
    existingWindow?: BrowserWindow;
}

export class AbstractWindow {
    window: BrowserWindow;
    existingWindow: BrowserWindow | null = null;
    initialURL: string | null = null;

    constructor(options: AbstractWindowOptions = {}) {
        this.window = options.existingWindow || new BrowserWindow(this.getWindowOptions());
        this.window.webContents.on("before-input-event", this.handleInput.bind(this));

        if (!options.existingWindow) {
            let bounds = AbstractWindow.calculateBounds();
            this.window.setBounds(bounds);
        }

        if (options.title) {
            this.window.setTitle(options.title);
        }

        this.initialURL = null;
    }

    static calculateBounds(): Rectangle {
        const { width, height } = screen.getPrimaryDisplay().workAreaSize;

        const windowWidth = Math.round(width * 0.85);
        const windowHeight = Math.round(height * 0.9);
        const x = Math.round((width - windowWidth) / 2);
        const y = Math.round((height - windowHeight) / 2);

        return {
            x, y,
            width: windowWidth,
            height: windowHeight
        }
    }

    protected getWindowOptions(): BrowserWindowConstructorOptions {
        return {
            minWidth: 400,
            minHeight: 400,
            center: true,
            resizable: true,
            useContentSize: true,
            webPreferences: {
                preload: path.join(__dirname, "preload.js"),
                javascript: true,
                nodeIntegration: false,
                contextIsolation: true
            }
        }
    }

    protected handleInput(
        event: Event,
        input: Input
    ) {
        const { webContents } = this.window;

        if (input.control) {
            if (input.key == "+" || input.key == "=") {
                event.preventDefault();
                webContents.setZoomLevel(webContents.getZoomLevel() + 1);
            }

            if (input.key == "-" || input.key == "=") {
                event.preventDefault();
                webContents.setZoomLevel(webContents.getZoomLevel() - 1);
            }
        }
    }

    public loadURL(url: string) {
        this.initialURL = url;
        this.window.loadURL(url);
    }
}