"use strict";

import React, { Component } from "react";
import styles from "./index.scss";

export class Icon extends Component {
    render() {
        let props = this.props;
        let types = [
            "blank",
            "circle", "download", "info",
            "safe-success", "safe-warning",
            "success", "success-circle",
            "success-no-circle", "waiting", "waiting-circle",
            "warning", "info-circle", "cancel"
        ];
        let sizes = ["normal", "large"];
        let type = props.type || "blank";
        let size = props.size || "normal";
        let classList = {
            icon: true,
            [size]: !!~sizes.indexOf(size),
            [props.type]: !!~types.indexOf(type)
        };
        classList[`large-${type}`] = "large" === size;
        let rst = Object.keys(classList).reduce((rst, key) => {
            if (!classList[key]) return rst;
            if (styles.hasOwnProperty(key)) {
                rst.push(styles[key]);
            }
            return rst;
        }, []);
        return <i className={rst.join(" ")} />;
    }
}
