"use strict";

import React, { Component } from "react";

export default class Page extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}
