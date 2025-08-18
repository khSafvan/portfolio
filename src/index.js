import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CursorProvider } from "./contexts/cursorState";
import CustomCursor from "./components/CustomCursor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CursorProvider>
      <CustomCursor />
      <App />
    </CursorProvider>
  </React.StrictMode>
);
