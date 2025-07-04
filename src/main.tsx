import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Importamos Bootstrap

// ReactDOM es el objeto que nos permite renderizar nuestro componente en el DOM (Podria ser ReactNative para apps moviles)
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
