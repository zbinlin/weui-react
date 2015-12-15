"use strict";

import {polyfill as promisePolyfill} from "es6-promise";
promisePolyfill();

import React from "react";
import ReactDOM from "react-dom";

import App from "./app";

ReactDOM.render(<App />, document.getElementById("main"));
