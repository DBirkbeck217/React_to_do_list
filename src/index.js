import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import Register from "./Components/Register.js";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    {
      <BrowserRouter>
        <App />
      </BrowserRouter>
    }
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
