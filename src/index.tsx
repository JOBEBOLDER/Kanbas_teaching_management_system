import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";  // 引入 Bootstrap 样式
import "bootstrap/dist/js/bootstrap.bundle.min.js";  // 引入 Bootstrap JavaScript
import "./index.css";  // 自定义样式
// import "./index.css"; // comment
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
