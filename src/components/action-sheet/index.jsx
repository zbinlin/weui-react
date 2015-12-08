"use strict";

import React, { Component } from "react";
import classNames from "classnames/bind";

import Dialog from "../dialog";

import styles from "./index.scss";
const cx = classNames.bind(styles);

import ReactDOM from "react-dom";

export default class ActionSheet extends Component {
    onClick(evt) {
        if (evt.currentTarget !== evt.target) {
            return;
        }
        evt.preventDefault();
        this.onCancel();
    }
    onCancel() {
        if (typeof this.props.onCancel === "function") {
            this.props.onCancel(this.hide.bind(this));
        }
    }
    show() {
        return new Promise(resolve => {
            setTimeout(() => {
                let root = this.refs.root;
                root.classList.add(cx("show"));
                resolve();
            });
        });
    }
    hide() {
        return new Promise(resolve => {
            let root = this.refs.root;
            root.classList.remove(cx("show"));
            setTimeout(resolve, 350);
        });
    }
    menuitemClickHandle(evt) {
        let index = evt.target.dataset.index;
        if (typeof this.props.onClick === "function") {
            this.props.onClick(() => {
                return new Promise(resolve => {
                    resolve(index);
                });
            }, this.hide.bind(this));
        }
    }
    componentDidMount() {
        let root = this.refs.root;
        setTimeout(() => {
            root.classList.add(cx("show"));
        });
    }
    render() {
        let props = this.props;
        let menuitems = [];
        let menuitemClickHandle = this.menuitemClickHandle.bind(this);
        if (Array.isArray(props.items) && props.items.length > 0) {
            for (let i = 0, len = props.items.length; i < len; i++) {
                let item = props.items[i];
                menuitems.push(
                    <li key={i} role="menuitem">
                        <a onClick={menuitemClickHandle} data-index={i}>{item}</a>
                    </li>
                );
            }
            menuitems.push(
                <li key="separator" role="separator"></li>
            );
        }
        menuitems.push(
            <li className={cx("cancel")} key="cancel" role="menuitem">
                <a onClick={this.onCancel.bind(this)}>取消</a>
            </li>
        );
        return (
            <Dialog onClick={this.onClick.bind(this)} modal>
                <div className={cx("root")} ref="root">
                    <ul className={cx("menu")} role="menu">
                        {menuitems}
                    </ul>
                </div>
            </Dialog>
        );
    }
}

export { ActionSheet };
