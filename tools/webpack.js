"use strict";

import webpack from "webpack";
import config from "./webpack.config.prod";

export default async function __webpack__() {
    return new Promise((resolve, reject) => {
        webpack(config, function (err, stats) {
            if (err) return reject(err);
            return resolve(stats);
        });
    });
};
