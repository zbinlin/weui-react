"use strict";

import React, { Component } from "react";
import classNames from "classnames/bind";

import Button, { ButtonGroup } from "../../button";

import styles from "./index.scss";

const cx = classNames.bind(styles);

export default class Msg extends Component {
    onConfirm() {
        if (typeof this.props.onConfirm === "function") {
            this.props.onConfirm(() => {
                return new Promise(resolve => {
                    resolve();
                });
            });
        }
    }
    onCancel() {
        if (typeof this.props.onConfirm === "function") {
            this.props.onCancel(() => {
                return new Promise(resolve => {
                    resolve();
                });
            });
        }
    }
    render() {
        let props = this.props;
        let icon = props.icon && (
            <div className={cx("icon")}>
                {props.icon}
            </div>
        );
        let title = props.title && <h2>{props.title}</h2>;
        let description;
        if (typeof props.children === "string") {
            description = <p>{props.children}</p>;
        } else {
            description = props.children;
        }
        let more;
        if (typeof props.more === "function") {
            more = (
                <div className={cx("more")}>
                    <a href="javascript:" onClick={props.more}>查看详情</a>
                </div>
            );
        } else if (typeof props.more === "string") {
            more = (
                <div className={cx("more")}>
                    <a href={props.more}>查看详情</a>
                </div>
            );
        }
        return (
            <div className={cx("root")}>
                <div className={cx("content")}>
                    {icon}
                    <div className={cx("msg")}>
                        {title}
                        {description}
                    </div>
                    <div className={cx("action")}>
                        <ButtonGroup>
                            <Button is="primary-btn" onClick={this.onConfirm.bind(this)}>确定</Button>
                            <Button is="default-btn" onClick={this.onCancel.bind(this)}>取消</Button>
                        </ButtonGroup>
                    </div>
                </div>
                {more}
            </div>
        );
    }
}
