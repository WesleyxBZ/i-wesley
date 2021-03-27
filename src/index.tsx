import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AOS from "aos";

import "./index.css";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";

AOS.init();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
