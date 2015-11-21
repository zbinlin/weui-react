"use strict";

import React, { Component } from "react";

import styles from "./index.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);


export default class Switch extends Component {
    render() {
        let props = this.props;
        let header = props.header;
        if (header) {
            header = <div className={cx("header")}>{header}</div>;
        }
        return (
            <div className={cx("root", "padding")}>
                {header}
                <div className={cx("body")}>{props.children}</div>
                <div className={cx("footer")}>
                    <div className={cx("switch")}>
                        <input type="checkbox" id={props.id} name={props.name}
                               onChange={props.onChange}
                               defaultChecked={props.defaultChecked}
                               checked={props.checked} />
                        <label htmlFor={props.id}
                               className={cx("icon")}></label>
                    </div>
                </div>
            </div>
        );
    }
}
