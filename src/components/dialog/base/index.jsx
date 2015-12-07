"use strict";

import React, { Component } from "react";
import ReactDOM from "react-dom";

import Portal from "./portal";

class Dialog extends Component {
    componentDidMount() {
        if (this.props.open !== false) {
            this.show();
        }
    }
    show() {
        let hostEl = this.hostEl;
        if (!hostEl) {
            hostEl = document.createElement("div");
            document.body.appendChild(hostEl);
            this.hostEl = hostEl;
        }
        ReactDOM.render(
            <Portal {...this.props} />,
            hostEl
        );
    }
    shouldComponentUpdate(nextProps) {
        return this.props.open !== nextProps.open || nextProps.open !== false;
    }
    componentDidUpdate() {
        this.show();
    }
    componentWillUnmount() {
        let hostEl = this.hostEl;
        this.hostEl = null;
        ReactDOM.unmountComponentAtNode(hostEl);
        document.body.removeChild(hostEl);
    }
    render() {
        return null;
    }
}

export default Dialog;
