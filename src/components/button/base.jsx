"use strict";

import React, { Component } from "react";

export default class Button extends Component {
    render() {
        let props = this.props;
        let cx = props.cx;
        let classList = ["root"];
        if (props.disabled) {
            classList.push("disabled");
        }
        return <a className={cx(classList)}>{props.children}</a>;
    }
}
