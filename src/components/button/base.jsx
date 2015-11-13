"use strict";

import React, { Component } from "react";

export default class BaseButton extends Component {
    render() {
        let props = this.props;
        let cx = props.cx;
        let classList = {
            [props.outline ? "outline-root" : "root"]: true,
            [props.outline ? "outline-disabled": "disabled"]: !!props.disabled,
            "small-btn": props.size === "small"
        };
        return <a className={cx(classList)}>{props.children}</a>;
    }
}
