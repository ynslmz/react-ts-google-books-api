import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/app";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import settings from "./settings/settings";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

document.title = settings.appName;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
