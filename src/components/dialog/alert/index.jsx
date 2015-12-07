"use strict";

import React, { Component } from "react";
import classNames from "classnames/bind";

import Dialog from "../base";
import styles from "./index.scss";

const cx = classNames.bind(styles);

export default class Alert extends Component {
    clickHandle() {
        if (typeof this.props.callback === "function") {
            this.props.callback(new Promise(resolve => {
                resolve();
            }));
        }
    }
    render() {
        let props = this.props;
        return (
            <Dialog modal open={this.props.open}>
                <div className={cx("alert")}>
                    <header className={cx("header")}>
                        <h2>{props.title}</h2>
                    </header>
                    <div className={cx("content")}>
                        {props.children}
                    </div>
                    <footer className={cx("footer")}>
                        <button onClick={this.clickHandle.bind(this)}>确定</button>
                    </footer>
                </div>
            </Dialog>
        );
    }
}
