import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { ScrapProvider } from "./providers/ScrapContext";
import { UserProvider } from "./providers/UserContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ScrapProvider>
          <App />
        </ScrapProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
