"use strict";

import React, { Component } from "react";
import classNames from "classnames/bind";
import styles from "./index.scss";

import icons from "./icons";

const cx = classNames.bind(styles);

class Icon extends Component {
    render() {
        let props = this.props;
        if (Object.keys(icons).indexOf(props.type) < 0) {
            return null;
        }
        let iconProps = icons[props.type];
        let size = props.size || "normal";
        let classList = ["icon"];
        let styl = {};
        if (!isNaN(size)) {
            styl.fontSize = size;
        } else {
            classList.push(size);
        }
        styl.color = (() => {
            if (props.color) {
                return props.color;
            }
            if (iconProps[size] && typeof iconProps[size] === "object") {
                return iconProps[size].color;
            } else {
                return iconProps.color;
            }
        })();
        return (
            <i className={cx(...classList)}
               data-icon={iconProps.value}
               style={styl} />
        );
    }
}

export default Icon;
export { Icon };
