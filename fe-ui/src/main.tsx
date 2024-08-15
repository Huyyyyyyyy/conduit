import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ReactQueryProvider from "./providers/ReactQueryProvider";
import AppRouter from "./routes/AppRouter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryProvider>
      <AppRouter />
    </ReactQueryProvider>
  </StrictMode>
);
