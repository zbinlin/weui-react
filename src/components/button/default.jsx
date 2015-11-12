"use strict";

import React from "react";
import classNames from "classnames/bind";
import Button from "./base";

import styles from "./default.scss";
const cx = classNames.bind(styles);

export default props => <Button {...props} cx={cx} />;
