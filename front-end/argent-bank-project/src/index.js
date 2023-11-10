import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { StrictMode } from "react";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
