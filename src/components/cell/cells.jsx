"use strict";

import React, { Component } from "react";

import styles from "./cells.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default class Cells extends Component {
    render() {
        let props = this.props;
        let title = props.title;
        if (title) {
            title = <div className={cx("title")}>{title}</div>;
        }
        let style = props.style;
        return (
            <div className={cx("root")}>
                {title}
                <div className={cx("content")} style={style}>
                    {props.children}
                </div>
            </div>
        );

    }
}
