"use strict";

import React, { Component } from "react";

import styles from "./index.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

import Icon from "../../icon";

class Input extends Component {
    render() {
        let props = this.props;

        let header = (() => {
            if (!props.hasOwnProperty("children")) return;
            let label = typeof props.children === "string" ?
                <label for={props.id}>{props.children}</label> : props.children;
            return <div className={cx("header")}>{label}</div>;
        })();

        // valid: [ "true", "false", "none" ]
        let icon = ((valid) => {
            const blank = <Icon type="blank" size={16} />;
            if (valid === void 0) {
                return blank;
            }
            valid += "";
            switch (valid.toLowerCase()) {
                case "true":
                    return <Icon type="success-no-circle" size={16} />;
                case "false":
                    return <Icon type="warning" size={16} />;
                case "none":
                default:
                    return blank;
            }
        })(props.valid);

        let footer = props.footer;

        return (
            <div className={cx("root")}>
                {header}
                <div className={cx("body")}>
                    <div className={cx("input-container")}>
                        <input id={props.id}
                               name={props.name}
                               type={props.type}
                               className={cx("input")}
                               onChange={props.onChange}
                               defaultValue={props.defaultValue}
                               value={props.value}
                               disabled={props.disabled} />
                    </div>
                </div>
                <div className={cx("footer")}>
                    <span className={cx("input-icon")}>
                        {icon}
                    </span>
                    {footer}
                </div>
            </div>
        );
    }
}

export default Input;
