import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./presentation/styles/global.css";
import { Provider } from "./lib/connectors/provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
