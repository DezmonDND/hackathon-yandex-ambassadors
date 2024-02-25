import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/style.scss";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledEngineProvider>
        <App />
      </StyledEngineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
