import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ReactQueryProvider from "./providers/ReactQueryProvider";
import App from "./components/App/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryProvider>
      <App></App>
    </ReactQueryProvider>
  </StrictMode>
);
