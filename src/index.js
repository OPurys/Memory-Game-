import React from "react";
import ReactDOM from "react-dom/client";
import { results, getImages } from "/public/data.js";
import { App } from "/src/components/app.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App getImages={getImages} results={results} />
  </React.StrictMode>
);
