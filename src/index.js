import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { StoreContextProvider } from "./store/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StoreContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreContextProvider>
);
