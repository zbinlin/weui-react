"use strict";

import React, { Component } from "react";
import classNames from "classnames/bind";

import styles from "./group.scss";

const cx = classNames.bind(styles);

export default class ButtonGroup extends Component {
    render() {
        let props = this.props;
        let style = props.style;
        let classList = ["root"];
        if (props.align === "justify") {
            classList.push("justify");
        }
        return (
            <div className={cx(...classList)} role="group" style={style}>
                {this.props.children}
            </div>
        );
    }
}
