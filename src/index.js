import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ReactLenis from "lenis/react";
import App from "./App";
import { CursorProvider } from "./contexts/cursorState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReactLenis
      root
      options={{ lerp: 0.07, wheelMultiplier: 0.8, smoothWheel: true }}
    >
      <CursorProvider>
        <App />
      </CursorProvider>
    </ReactLenis>
  </React.StrictMode>
);
