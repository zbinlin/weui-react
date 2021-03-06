"use strict";

import React, { Component } from "react";

import styles from "../base.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);


export default class Cell extends Component {
    render() {
        let props = this.props;
        let header = props.header;
        if (header) {
            header = <div className={cx("header")}>{header}</div>;
        }
        let footer = props.footer;
        if (footer) {
            footer = <div className={cx("footer")}>{footer}</div>;
        }
        return (
            <div className={cx("root", "padding")}>
                {header}
                <div className={cx("body")}>{props.children}</div>
                {footer}
            </div>
        );
    }
}
