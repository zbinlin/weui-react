"use strict";

import fs from "fs";
import path from "path";
import glob from "./glob-promise";
import promising from "promise-adapter";
import mkdir from "mkdir-promise";

const stat = promising(fs.stat);
const access = promising(fs.access);

function isDirectory(dir) {
    return access(dir, fs.R_OK | fs.W_OK).then(() => {
        return stat(dir).then(stats => {
            if (!stats.isDirectory()) {
                throw new Error(`'${dir}' is not a directory!`);
            }
        });
    });
}

function write(src, dst) {
    return new Promise((resolve, reject) => {
        let readStream = fs.createReadStream(src);
        let writeStream = fs.createWriteStream(dst);
        readStream.on("error", reject)
            .pipe(writeStream)
            .on("error", reject)
            .on("finish", resolve);
    });
}

function copy(src, dst) {
    return isDirectory(src)
        .then(() => {
            return mkdir(dst);
        }, () => {
            let dirname = path.dirname(dst);
            return mkdir(dirname)
            .then(() => {
                return write(src, dst);
            });
        }).catch(err => {
            console.error(err.stack || err);
        });
}

export default function __copy__(src, dst, base = process.cwd()) {
    return isDirectory(dst)
    .then(() => {
        return glob(src, {
            dot: true
        });
    }).then(files => {
        let from = path.resolve(base);
        return files.reduce((files, fp) => {
            let rfp = path.relative(from, path.resolve(fp));
            if (rfp.indexOf("..") === 0) {
                console.warn(`'${fp}' outside the ${base}`);
            } else {
                files.push([
                    path.resolve(fp),
                    path.resolve(path.join(dst, rfp))
                ]);
            }
            return files;
        }, []);
    }).then(fps => {
        /* 移除源与目标一样的路径 */
        return fps.filter(([src, dst]) => {
            return src != dst;
        });
    }).then(fps => {
        return Promise.all(fps.map(sd => copy(...sd)));
    });
}
