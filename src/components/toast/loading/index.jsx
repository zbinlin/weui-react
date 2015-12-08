"use strict";

import React, { Component } from "react";
import classNames from "classnames/bind";

import Toast from "..";

import styles from "./index.scss";

const cx = classNames.bind(styles);

export default class Loading extends Component {
    render() {
        let leafs = (count => {
            let leafs = [];
            for (let i = 0; i < count; i++) {
                leafs.push(
                    <div key={i} className={cx("leaf")}></div>
                );
            }
            return leafs;
        })(12);
        let icon = (
            <div className={cx("loading")}>{leafs}</div>
        );
        let props = this.props;
        return (
            <Toast icon={icon}>
                {props.children}
            </Toast>
        );
    }
}
