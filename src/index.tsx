import React, { lazy } from "react";
import { createRoot } from "react-dom/client";

const App = lazy(() => import("./main"));

/**
 * Our fallback ui when browser is not
 */
const root = createRoot(document.getElementById("root") as HTMLDivElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
