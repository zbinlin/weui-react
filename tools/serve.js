"use strict";

import webpackDevServer from "webpack-dev-server";
import webpack from "webpack";
import config from "./webpack.config.dev";

const PORT = process.env.PORT || 8080;

config.entry.unshift(`webpack-dev-server/client?http://localhost:${PORT}`, "webpack/hot/dev-server");
let compiler = webpack(config);
let server = new webpackDevServer(compiler, {
    hot: true,
    contentBase: "dist"
});
server.listen(PORT);
