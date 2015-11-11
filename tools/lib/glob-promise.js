"use strict";

import glob from "glob";

export default function globPromise(pattern, options = {}) {
    return new Promise((resolve, reject) => {
        glob(pattern, options, function (err, matches) {
            if (err) {
                reject(err);
            } else {
                resolve(matches);
            }
        });
    });
}
