import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AOS from "aos";

import "./index.css";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";

AOS.init();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
