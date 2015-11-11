"use strict";

import fs from "fs";
import path from "path";
import sass from "node-sass";
import promising from "promise-adapter";
import glob from "./lib/glob-promise";
import copy from "./lib/copy";
import mkdir from "mkdir-promise";
import postcss from "postcss";
import rename from "./lib/rename-css-composes";

const ENV = process.env.NODE_ENV;
const PWD = process.cwd();
const FILES = "src/components/**/*.{sa,sc,c}ss";
const ROOT = "src";
const IGNORE = ["**/__tests__/**"];
const OPTIONS = {
    sourceMap: ENV == "production" ? false : true
};
const DST = "lib";

const read = promising(fs.readFile);
const write = promising(fs.writeFile);

export default function buildCSS(paths = FILES, dest = DST, ignore = IGNORE, options = OPTIONS) {
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
            if (extname != ".css") {
                dst = dst.slice(0, -extname.length) + ".css";
            }
            return read(file, {
                encoding: "UTF-8"
            }).then(str => {
                return new Promise((resolve, reject) => {
                    sass.render(
                        Object.assign({}, options, {
                            file: file,
                            data: str,
                            outFile: dst
                        }),
                        function (err, result) {
                            if (err) return reject(err);
                            let processor = postcss([rename]);
                            let map = false;
                            if (result.map) {
                                map = {
                                    inline: !!options.sourceMapEmbed,
                                    prev: result.map.toString()
                                };
                            }
                            let rst = processor.process(result.css.toString("UTF-8"), {
                                from: file,
                                to: dst,
                                map: map
                            });
                            resolve([rst.css, rst.map]);
                        }
                    );
                });
            }).then(([code, map]) => {
                let dirname = path.dirname(dst);
                return mkdir(dirname).then(() => {
                    let rst = [];
                    rst.push(write(dst, code));
                    if (map) {
                        rst.push(write(dst + ".map", map));
                    }
                    return Promise.all(rst);
                });
            });
        }));
    });
}
