import React from "react";
import ReactDOM from "react-dom/client";
import "@adamjanicki/ui/style.css";
import "src/style.css";
import Sandbox from "src/Sandbox";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Sandbox />
  </React.StrictMode>
);
