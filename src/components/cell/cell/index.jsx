"use strict";

import React, { Component } from "react";

import styles from "./cell.scss";
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
        let Root = (() => {
            if (typeof props.href === "string") {
                return props => <a className={props.className} href={props.href}>{props.children}</a>;
            } else {
                return props => <div className={props.className}>{props.children}</div>;
            }
        })();
        return (
            <Root {...props} className={cx("root")}>
                {header}
                <div className={cx("body")}>{props.children}</div>
                {footer}
            </Root>
        );
    }
}
