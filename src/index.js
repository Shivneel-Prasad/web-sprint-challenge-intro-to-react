// This is for the fake API. Do not delete!
import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";

import { worker } from "./mocks/browser";
worker.start();

render(
    <App />, 
    document.getElementById("root"));
