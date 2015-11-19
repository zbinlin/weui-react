"use strict";

import React, { Component } from "react";

import styles from "./index.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);


export default class Link extends Component {
    render() {
        let props = this.props;
        let header = props.header;
        if (header) {
            header = <div className={cx("header")}>{header}</div>;
        }
        let footer = props.footer;
        return (
            <a className={cx("root")} href={props.href}>
                {header}
                <div className={cx("body")}>{props.children}</div>
                <div className={cx("footer")}>{footer}</div>
            </a>
        );
    }
}
