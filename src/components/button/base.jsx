"use strict";

import React, { Component } from "react";

export default class BaseButton extends Component {
    render() {
        let props = this.props;
        let cx = props.cx;
        let classList = [];
        let prefix = "";
        if (props.outline) {
            prefix = "outline";
        }
        classList.push("root");
        if (props.disabled) {
            classList.push("disabled");
        }
        classList = classList.map(cls => prefix ? [prefix, cls].join("-") : cls);
        return <a className={cx(classList)}>{props.children}</a>;
    }
}
