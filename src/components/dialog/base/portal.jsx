"use strict";

import React, { Component } from "react";

import classNames from "classnames/bind";
import styles from "./index.scss";

const cx = classNames.bind(styles);

export default class Portal extends Component {
    render() {
        let props = this.props;
        if (props.open === false) {
            return null;
        }
        let classList = [];
        classList.push("dialog");
        if (props.modal) {
            classList.push("backdrop");
        }
        return (
            <div className={cx(...classList)} onClick={props.onClick}>
                {this.props.children}
            </div>
        );
    }
}
