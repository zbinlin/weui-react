"use strict";

import path from "path";
import webpack from "webpack";

const PWD = path.join(__dirname, "..");

export default {
    entry: [
        path.join(PWD, "./src/index.js")
    ],
    output: {
        path: path.join(PWD, "./lib"),
        publicPath: "/",
        filename: "index.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules|dist/,
                loaders: ["babel?cacheDirectory&-babelrc&presets[]=es2015&presets[]=react"]
            },
            {
                test: /\.(s[ac]|c)ss$/,
                exclude: /node_modules|dist/,
                loaders: ["style", "css?modules&+autoprefixer", "sass"]
            }
        ]
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
