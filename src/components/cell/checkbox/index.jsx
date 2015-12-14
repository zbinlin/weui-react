"use strict";

import React, { Component } from "react";

import styles from "./index.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

import Icon from "../../icon";

class Checkbox extends Component {
    render() {
        let props = this.props;
        let footer = props.footer;
        if (footer) {
            footer = <div className={cx("footer")}>{footer}</div>;
        }
        return (
            <div className={cx("root", "padding", props.disabled ? "disabled" : "")}>
                <div className={cx("header")}>
                    <input id={props.id} className={cx("checkbox")} type="checkbox"
                           form={props.form}
                           required={props.required}
                           name={props.name}
                           onChange={props.onChange}
                           defaultChecked={props.defaultChecked}
                           checked={props.checked}
                           disabled={props.disabled} />
                    <span className={cx("checkbox-icon")}>
                        <Icon type="circle" size={23} />
                    </span>
                    <span className={cx("checkbox-icon", "checked")}>
                        <Icon type="success" size={23} />
                    </span>
                </div>
                <div className={cx("body")}>{props.label || props.children}</div>
                {footer}
            </div>
        );
    }
}

export default Checkbox;
