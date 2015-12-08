"use strict";

import React, { Component } from "react";

import Dialog from "../../dialog";
import Icon from "../../icon";

import classNames from "classnames/bind";
import styles from "./index.scss";

const cx = classNames.bind(styles);

export default class Toast extends Component {
    render() {
        let props = this.props;
        let icon = props.icon;
        return (
            <Dialog>
                <div className={cx("root")}>
                    {icon}
                    <div className={cx("content")}>
                        {props.children}
                    </div>
                </div>
            </Dialog>
        );
    }
}

Toast.defaultProps = {
    icon: <Icon type="success-no-circle" size={55} color="white" />,
};
