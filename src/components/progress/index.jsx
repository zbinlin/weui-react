"use strict";

import React, { Component } from "react";
import styles from "./index.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

import Icon from "../icon";

class Progress extends Component {
    render() {
        let props = this.props;
        let isIndeterminate = (() => {
            if (!props.hasOwnProperty("value")) {
                return true;
            } else {
                return false;
            }
        })();
        let maxValue = (() => {
            let max = +props.max;
            if (isNaN(max)) {
                return 1.0;
            }
            return max;
        })();
        let currentValue = (() => {
            let value = +props.value;
            if (isNaN(value) || value <= 0) {
                value = 0;
            }
            if (value >= maxValue) {
                value = maxValue;
            }
            return value;
        })();
        let position = (() => {
            if (isIndeterminate) {
                return -1;
            }
            return currentValue / maxValue;
        })();
        let styl = {
            width: `${position * 100}%`
        };
        let cancelable = (() => {
            let isCancelable = typeof props.onCancel == "function";
            if (isCancelable) {
                return (
                    <div className={cx("progress-cancel")}>
                        <a onClick={props.onCancel}>
                            <Icon type="cancel" className={cx("cancel")} />
                        </a>
                    </div>
                );
            }
        })();
        return (
            <div className={cx("root")}>
                <div className={cx("progress")}>
                    <div className={
                        cx("progress-bar", { canceled: !!props.canceled })
                    } style={styl}></div>
                </div>
                {cancelable}
            </div>
        );
    }
}

export default Progress;
export { Progress };
