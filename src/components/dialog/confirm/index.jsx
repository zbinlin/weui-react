"use strict";

import React, { Component } from "react";
import classNames from "classnames/bind";

import Dialog from "../base";
import styles from "./index.scss";

const cx = classNames.bind(styles);

export default class Confirm extends Component {
    onClick(confirm) {
        if (typeof this.props.callback === "function") {
            this.props.callback(this.confirm.bind(this, confirm));
        }
    }
    confirm(rst) {
        return new Promise(resolve => {
            resolve(!!rst);
        });
    }
    render() {
        let props = this.props;
        return (
            <Dialog modal open={this.props.open}>
                <div className={cx("confirm")}>
                    <header className={cx("header")}>
                        <h2>{props.title}</h2>
                    </header>
                    <div className={cx("content")}>
                        {props.children}
                    </div>
                    <footer className={cx("footer")}>
                        <button className={cx("btn-default")}
                                onClick={this.onClick.bind(this, false)}>取消</button>
                        <button className={cx("btn-primary")}
                                onClick={this.onClick.bind(this, true)}>确定</button>
                    </footer>
                </div>
            </Dialog>
        );
    }
}
