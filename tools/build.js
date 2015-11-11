"use strict";

import run from "./lib/run";
import clean from "./lib/clean";
import copy from "./lib/copy";
import js from "./build-js";
import css from "./build-css";
import webpack from "./webpack.js";

async function build() {
    await run("Clean lib/", clean, "lib/**/*");
    await run("Build JS", js);
    await run("Build CSS", css);
}

run(build);
