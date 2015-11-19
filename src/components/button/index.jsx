"use strict";

import React from "react";

import PrimaryButton from "./primary";
import WarningButton from "./warning";
import DefaultButton from "./default";

export const Button = props => {
    let Button = null;
    switch (props.is) {
        case "primary-btn":
            Button = PrimaryButton;
            break;
        case "warning-btn":
            Button = WarningButton;
            break;
        case "default-btn":
            Button = DefaultButton;
            break;
        default:
            Button = PrimaryButton;
    }
    return <Button {...props} />;
};

export {
    PrimaryButton,
    WarningButton,
    DefaultButton
};
