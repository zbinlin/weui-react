"use strict";

import path from "path";
import webpack from "webpack";

const PWD = path.join(__dirname, "..");

export default {
    entry: [
        path.join(PWD, "./examples/bootstrap.js")
    ],
    output: {
        path: path.join(PWD, "./dist"),
        publicPath: "/",
        filename: "bundle.js"
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
                loaders: ["style", "css?modules&-autoprefixer&localIdentName=[path][name]--[local]--[hash:base64:5]&sourceMap"]
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
