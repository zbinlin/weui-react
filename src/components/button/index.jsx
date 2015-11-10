"use strict";

import React, { Component } from "react";
import styles from "./index.scss";

class Button extends Component {
    render() {
        let props = this.props;
        let Btn = PrimaryButton;
        let styl = styles.primary; // default
        switch (props.is) {
            case "primary-btn":
                styl = styles.primary;
                break;
            case "warning-btn":
                styl = styles.warning;
                break;
            case "default-btn":
                styl = styles.default;
                break;
        }
        return <a className={styl}>{props.children}</a>;
    }
}
Button.defaultProps = {
    is: "primary-btn",
    size: "medium",
    state: "normal"
};


let PrimaryButton = props => <Button {...props} is="primary-btn" />;
let WarningButton = props => <Button {...props} is="warning-btn" />;
let DefaultButton = props => <Button {...props} is="default-btn" />;


export {
    Button as default,
    PrimaryButton,
    WarningButton,
    DefaultButton
};
