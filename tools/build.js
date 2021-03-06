"use strict";

import run from "./lib/run";
import clean from "./lib/clean";
import copy from "./lib/copy";
import js from "./build-js";
import css from "./build-css";
import webpack from "./webpack.js";

const ENV = process.env.NODE_ENV;

async function build() {
    try {
        if (ENV === "production") {
            await run("Clean lib/", clean, "lib/**/*");
        }
        await run("Build JS", js);
        await run("Build CSS", css);
    } catch (ex) {
        console.error(ex);
    }
}

if (require.main === module) {
    run(build);
} else {
    module.exports = function () {
        return run(build);
    };
}
