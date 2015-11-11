"use strict";

export default function (exp = /\.(s[ac]|c)ss$/i, ext = ".css") {
    return function renameJSImport({ types: t }) {
        return {
            visitor: {
                CallExpression(path) {
                    let callee = path.get("callee");
                    let calleeNode = callee.node;
                    if (calleeNode.type !== "Identifier" || calleeNode.name !== "require") {
                        return;
                    }
                    let firstArg = path.get("arguments")[0];
                    let firstArgNode = firstArg.node;
                    if (firstArgNode.type !== "StringLiteral") {
                        return;
                    }
                    if (exp.test(firstArgNode.value)) {
                        //firstArgNode.value = firstArgNode.value.replace(exp, ext);
                        let val = t.stringLiteral(firstArgNode.value.replace(exp, ext));
                        firstArg.replaceWith(val);
                    }
                }
            }
        };
    };
}
