"use strict";

import React, { Component } from "react";
import classNames from "classnames/bind";

import styles from "./group.scss";

const cx = classNames.bind(styles);

export default class ButtonGroup extends Component {
    render() {
        return (
            <div className={cx("group")} role="group">
                {this.props.children}
            </div>
        );
    }
}
