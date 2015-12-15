"use strict";

import React, { Component } from "react";

import {
    Icon,
    Msg,
} from "../..";

export default class MsgPage extends Component {
    onConfirm(done) {
        done().then(() => {
            alert("Accepted!");
        });
    }
    onCancel(done) {
        done().then(() => {
            alert("canceled!");
        });
    }
    render() {
        let icon = <Icon size="large" type="success" />;
        return (
            <Msg title="操作成功" more="" icon={icon}
                 onConfirm={this.onConfirm.bind(this)}
                 onCancel={this.onCancel.bind(this)}>
                <p>内容详情，可根据实际需要安排</p>
            </Msg>
        );
    }
}
