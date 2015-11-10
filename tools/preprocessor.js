"use strict";

const sass = require("node-sass");
const setup = require("css-modules-require-hook");
setup({
    extensions: [".css", ".scss", ".sass"],
    preprocessCss: function (src, filename) {
        return sass.renderSync({
            file: filename,
            data: src
        }).css;
    }
});
const babel = require("babel-jest");

module.exports = {
    process: function (src, filename) {
        /*
         * 由于 Jest 重写了 require 导致 require.extensions 为 undefined
         * 这时，上面的 css-modules-require-hook 就会失效，
         * 因此这里先预处理，转换成 module string
         */
        if (/\.(s[ac]|c)ss$/i.test(filename)) {
            return "module.exports = " + JSON.stringify(require(filename));
        }
        return babel.process(src, filename);
    }
};
