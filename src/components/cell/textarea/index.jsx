"use strict";

import React, { Component } from "react";

import styles from "./index.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default class Textarea extends Component {
    render() {
        let props = this.props;
        return (
            <div className={cx("root")} href={props.href}>
                <div className={cx("body")}>
                    <div className={cx("textarea-container")}>
                        <textarea
                            id={props.id}
                            name={props.name}
                            form={props.form}
                            className={cx("textarea")}
                            placeholder={props.placeholder}
                            defaultValue={props.defaultValue}
                            value={props.value}
                            onChange={props.onChange}
                        />
                    </div>
                </div>
                <div className={cx("footer")}></div>
            </div>
        );
    }
}
