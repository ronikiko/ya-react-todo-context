import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TodoStateContext from "./context/TodoStateContext";

ReactDOM.render(
  <React.StrictMode>
    <TodoStateContext>
      <App />
    </TodoStateContext>
  </React.StrictMode>,
  document.getElementById("root")
);
