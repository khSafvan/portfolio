import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ReactLenis from "lenis/react";

// Use React.lazy for code splitting
const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReactLenis
      root
      options={{ lerp: 0.07, wheelMultiplier: 0.8, smoothWheel: true }}
    >
      <Suspense
        fallback={
          <div
            style={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Loading...
          </div>
        }
      >
        <App />
      </Suspense>
    </ReactLenis>
  </React.StrictMode>
);
