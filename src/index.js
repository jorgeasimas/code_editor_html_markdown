import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Editor from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Editor />
  </StrictMode>,
  rootElement
);
