"use strict";

import fs from "fs";
import path from "path";
import {transform} from "babel-core";
import promising from "promise-adapter";
import glob from "./lib/glob-promise";
import mkdir from "mkdir-promise";
import rename from "./lib/rename-js-import";

const ENV = process.env.NODE_ENV;
const FILES = "src/**/*.js{,x}";
const ROOT = "src";
const IGNORE = ["**/__tests__/**"];
const OPTIONS = {
    sourceMaps: ENV == "production" ? false : true,
    presets: ["react", "es2015"],
    babelrc: false,
    plugins: [rename()]
};
const DST = "lib";

const read = promising(fs.readFile);
const write = promising(fs.writeFile);

export default function buildJS(paths = FILES, dest = DST, ignore = IGNORE, options = OPTIONS) {
    return glob(paths, {
        ignore: ignore
    })
    .then(files => {
        return Promise.all(files.map(file => {
            let fp = path.relative(ROOT, path.resolve(file));
            if (fp.indexOf("..") == 0) {
                console.warn(`"${fp} outsite ${file}`);
                fp = path.resolve(file);
            }
            let dst = path.resolve(dest);
            dst = path.join(dst, fp);
            let extname = path.extname(dst);
            if (extname != ".js") {
                dst = dst.slice(0, -extname.length) + ".js";
            }
            return read(file, {
                encoding: "UTF-8"
            }).then(str => {
                let result = transform(str, Object.assign(Object.create(null),
                    options, {
                        filename: file
                    }
                ));
                return [result.code, result.map];
            }).then(([code, map]) => {
                let dirname = path.dirname(dst);
                return mkdir(dirname).then(() => {
                    let rst = [];
                    rst.push(write(dst, code));
                    if (map) {
                        rst.push(write(dst + ".map", JSON.stringify(map, null, "  ")));
                    }
                    return Promise.all(rst);
                });
            });
        }));
    });
}
