"use strict";

import React, { Component } from "react";
import classNames from "classnames/bind";

import styles from "./index.scss";

const cx = classNames.bind(styles);

export default class Article extends Component {
    render() {
        return (
            <article className={cx("article")}>
                {this.props.children}
            </article>
        );
    }
}
