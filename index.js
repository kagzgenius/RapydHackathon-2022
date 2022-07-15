import * as ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles.css"
import App from "./src/components/app"
import React from "react";

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