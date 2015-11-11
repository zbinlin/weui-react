"use strict";

import path from "path";
import del from "del";

const ROOT = path.resolve(__dirname, "../../");
const WHITELIST = ["/dist/", "/lib/", "/.haste_chche/"].map(dir => path.join(ROOT, dir));

export default function clean(dst, opt = {}) {
    let pwd = opt.pwd || process.cwd();
    if (!WHITELIST.some(dir => !path.join(path.isAbsolute(dst) ? ROOT : pwd, dst).indexOf(dir))) {
        return Promise.reject(new Error("路径不在白名单中，无法删除！"));
    }
    return del(dst, Object.assign(Object.create(null), opt, {
        root: ROOT,
        dot: true
    }));
}
