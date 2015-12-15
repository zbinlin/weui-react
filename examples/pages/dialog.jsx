"use strict";

import React, { Component } from "react";

import Page, { Header } from "./base";

import {
    Alert,
    Confirm,
    ButtonGroup,
    PrimaryButton,
} from "../../";

export default class DialogPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alert: false,
            confirm: false,
        };
    }
    alert() {
        this.setState({
            alert: true,
        });
    }
    onAlert(done) {
        done().then(() => {
            this.setState({
                alert: false
            }, function () {
                alert("确定");
            });
        });
    }
    confirm() {
        this.setState({
            confirm: true,
        });
    }
    onConfirm(done) {
        done().then(() => {
            this.setState({
                confirm: false
            }, function () {
                alert("确定");
            });
        });
    }
    onCancel(done) {
        done().then(() => {
            this.setState({
                confirm: false
            }, function () {
                alert("取消");
            });
        });
    }
    render() {
        return (
            <Page>
                <Header>Dialog</Header>
                <div style={{marginTop: "4.5em"}}>
                    <Alert onConfirm={this.onAlert.bind(this)}
                           open={this.state.alert}
                           title={"弹窗标题"}>
                        弹窗内容，告知当前页面信息等
                    </Alert>
                    <Confirm onConfirm={this.onConfirm.bind(this)}
                             onCancel={this.onCancel.bind(this)}
                             open={this.state.confirm}>
                        <div>自定义弹窗内容</div>
                    </Confirm>
                    <ButtonGroup>
                        <PrimaryButton onClick={this.alert.bind(this)}>点击弹出 Alert</PrimaryButton>
                        <PrimaryButton onClick={this.confirm.bind(this)}>点击弹出 Confirm</PrimaryButton>
                    </ButtonGroup>
                </div>
            </Page>
        );
    }
}
