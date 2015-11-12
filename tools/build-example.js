"use strict";

import run from "./lib/run";
import clean from "./lib/clean";
import copy from "./lib/copy";
import js from "./build-js";
import css from "./build-css";
import webpack from "./webpack.js";

async function buildExample() {
    try {
        await run("Clean dist/", clean, "dist/**/*");
        await run("Copy", copy, "examples/index.html", "dist/", "examples");
        await run("webpack", webpack);
    } catch (ex) {
        console.error(ex);
    }
}

run(buildExample);
