"use strict";

import React from "react";
import classNames from "classnames/bind";
import BaseButton from "./base";

import styles from "./default.scss";
const cx = classNames.bind(styles);

export default props => <BaseButton {...props} cx={cx} />;
