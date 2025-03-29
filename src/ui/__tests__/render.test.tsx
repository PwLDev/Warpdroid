import React from "react";
import ReactDOM from "react-dom/client";
import App from "../app";

test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.createRoot(div).render(<App />);
});