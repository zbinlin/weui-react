"use strict";

const format = date => date.toTimeString().split(" ")[0];

/**
 * @param {string} [name=fn.displayName||fn.name||"UNKNOW"] task name
 * @param {(Function|*)} fn task function
 * @param {...} [...args] task function's arguments
 * @returns {}
 */
export default async function run(name, fn, ...args) {
    if (typeof name === "function") {
        args.unshift(fn);
        fn = name;
        name = fn.displayName || fn.name || "UNKNOW";
    }

    let start = new Date();
    console.log(`[${format(start)}] Starting ${name}...`);
    let promise = typeof fn === "function" ? fn(...args) : fn;
    let ret = await promise;
    let end = new Date();
    console.log(`[${format(end)}] Finished ${name} after ${end - start}ms.`);

    return ret;
}
