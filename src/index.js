import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ReactLenis from "lenis/react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReactLenis root options={{ lerp: 0.1, duration: 1.4 }}>
      <App />
    </ReactLenis>
  </React.StrictMode>
);
