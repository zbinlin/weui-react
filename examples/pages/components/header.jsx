"use strict";

import React, { Component } from "react";
import classNames from "classnames/bind";

import styles from "./header.css";

const cx = classNames.bind(styles);

export default class Header extends Component {
    render() {
        let props = this.props;
        let title;
        if (typeof props.children === "string") {
            title = (
                <h2 className={cx("title")} style={props.style}>
                    {props.children}
                </h2>
            );
        } else {
            title = props.children;
        }
        let description;
        if (props.description) {
            description = (
                <p>{props.description}</p>
            );
        }
        return (
            <div className={cx("root")}>
                {title}
                {description}
            </div>
        );
    }
}
