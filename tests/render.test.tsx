import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/ui/app";

import "./styles/layout.css";

test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.createRoot(div).render(<App />);
});