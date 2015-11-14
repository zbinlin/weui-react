"use strict";

import chokidar from "chokidar";
import path from "path";
import build from "./build";

const DIR = path.join(process.cwd(), "./src");

function debounce(fn, timeout = 1000) {
    let hold = false;
    return function () {
        if (hold) return;
        hold = true;
        let promise = fn();
        let rst = [];
        if (typeof promise.catch === "function" && typeof promise.then === "function") {
            rst.push(promise);
        }
        rst.push(new Promise(function (resolve) {
            setTimeout(function () {
                resolve();
            }, timeout);
        }));
        Promise.all(rst).catch(function (err) {
            console.error(err);
        }).then(function () {
            hold = false;
        });
    };
}

let watcher = chokidar.watch(DIR, {
    persistent: true,
    recursive: true
});
watcher.on("change", debounce(build));
watcher.on("error", function (err) {
    console.error(err);
    watcher.close();
});
console.log("Watcher start...");
