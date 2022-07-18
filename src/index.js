import React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles.css"
import { App } from "./App.js"

const root = ReactDOM.createRoot(
    document.getElementById("app")
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);