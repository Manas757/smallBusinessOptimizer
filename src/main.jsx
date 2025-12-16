import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

/*
  Vite expects an element with id="root" in index.html.
  This file mounts the React app into that element.
*/

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
