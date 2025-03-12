import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
    return (
        <h1>Welcome to Warpdroid</h1>
    );
}

const root = createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);