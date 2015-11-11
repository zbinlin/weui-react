"use strict";

import run from "./lib/run";
import clean from "./lib/clean";
import copy from "./lib/copy";
import js from "./build-js";
import css from "./build-css";
import webpack from "./webpack.js";

// 默认为开发环境
const ENV = process.env.NODE_ENV || "development";

async function build() {
    await run("Clean lib/", clean, "lib/**/*");
    await run("Build JS", js);
    await run("Build CSS", css);
    if (ENV == "production") {
        await buildExample;
    }
}

async function buildExample() {
    await run("Clean dist/", clean, "dist/**/*");
    await run("Copy", copy, "example/index.html", "dist/");
    await run("webpack", webpack);
}

run(build);
