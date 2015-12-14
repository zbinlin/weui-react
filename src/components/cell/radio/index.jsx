"use strict";

import React, { Component } from "react";

import styles from "./index.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

import Icon from "../../icon";

class Radio extends Component {
    render() {
        let props = this.props;
        let header = props.header;
        if (header) {
            header = <div className={cx("header")}>{header}</div>;
        }
        return (
            <div className={cx("root", "padding", props.disabled ? "disabled" : "")}>
                {header}
                <div className={cx("body")}>{props.label || props.children}</div>
                <div className={cx("footer")}>
                    <input id={props.id} className={cx("radio")} type="radio"
                           name={props.name}
                           onChange={props.onChange}
                           defaultChecked={props.defaultChecked}
                           checked={props.checked}
                           disabled={props.disabled} />
                    <span className={cx("radio-icon")}>
                        <Icon type="success-no-circle" size={16} />
                    </span>
                </div>
            </div>
        );
    }
}

export default Radio;
