import React from "react";
import ReactDOM from "react-dom/client";
import ReactLenis from "lenis/react";
import App from "./App";
import { CursorProvider } from "./contexts/cursorState";
import CustomCursor from "./components/CustomCursor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReactLenis
      root
      options={{ lerp: 0.07, wheelMultiplier: 0.8, smoothWheel: true }}
    >
      <CursorProvider>
        <CustomCursor />
        <App />
      </CursorProvider>
    </ReactLenis>
  </React.StrictMode>
);
