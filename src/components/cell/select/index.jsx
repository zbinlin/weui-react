"use strict";

import React, { Component } from "react";

import styles from "./index.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class Select extends Component {
    render() {
        let props = this.props;
        let header = <div className={cx("header")}>{props.label || props.children}</div>;
        let options = props.options.map(opt => {
            if (Array.isArray(opt)) {
                return [...opt];
            } else {
                return [opt, opt, false];
            }
        });
        let content = options.map((opt, idx) => {
            return <option key={idx} value={opt[1]}>{opt[0]}</option>;
        });
        let defaultValue = (() => {
            if (props.hasOwnProperty("defaultValue")) {
                return props.defaultValue;
            }
            let selectedIndex = props.hasOwnProperty("selectedIndex") ?
                props.selectedIndex : options.find(opt => !!opt[2]);
            return (options[selectedIndex] || [])[1];
        })();
        return (
            <div className={cx("root")}>
                {header}
                <div className={cx("body")}>
                    <div className={cx("select-container")}>
                        <select id={props.id}
                                name={props.name}
                                form={props.form}
                                defaultValue={defaultValue}
                                value={props.value}
                                onChange={props.onChange}
                                className={cx("select")}>
                            {content}
                        </select>
                    </div>
                </div>
                <div className={cx("footer")}></div>
            </div>
        );
    }
}

Select.defaultProps = {
    options: [],
};

export default Select;
