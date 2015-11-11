"use strict";

import * as postcss from "postcss";

const OPTIONS = {
    exp: /\.(s[ac]|c)ss(?!\.)/i,
    ext: ".css"
};
export default postcss.plugin("rename-css-compose", function (opt = {}) {
    opt = Object.assign({}, OPTIONS, opt);
    return function (css, result) {
        css.walkDecls("composes", function (decl) {
            let val = postcss.list.space(decl.value);
            if (val[1] == "from") {
                val[2] = val[2].replace(opt.exp, opt.ext);
                let newDecl = decl.clone({
                    value: val.join(" ")
                });
                decl.replaceWith(newDecl);
            }
        });
    };
});
