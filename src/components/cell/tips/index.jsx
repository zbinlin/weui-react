"use strict";

import React, { Component } from "react";
import classNames from "classnames/bind";

import styles from "./index.scss";

const cx = classNames.bind(styles);

export default class Tips extends Component {
    render() {
        return (
            <div className={cx("root")}>{this.props.children}</div>
        );
    }
}
