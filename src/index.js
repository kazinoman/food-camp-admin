import reactDom from "react-dom";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
const root = document.getElementById("root");

reactDom.render(
  <Router>
    <App />
  </Router>,
  root
);
