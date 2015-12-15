"use strict";

import React, { Component } from "react";

import Page, { Header } from "./base";

import {
    ActionSheet,
    ButtonGroup,
    PrimaryButton,
} from "../..";

export default class ActionSheetPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actionSheet: false,
        };
    }
    onClick() {
        this.setState({
            actionSheet: true
        });
    }
    onConfirm(getResult, done) {
        getResult().then(rst => {
            alert(rst);
            return done();
        }).then(() => {
            this.setState({
                actionSheet: false
            });
        });
    }
    onCancel(done) {
        done().then(() => {
            this.setState({
                actionSheet: false
            });
        });
    }
    render() {
        let actionSheet = this.state.actionSheet ?
            <ActionSheet items={["示例1", "示例2"]}
                onClick={this.onConfirm.bind(this)}
                onCancel={this.onCancel.bind(this)} /> : null;
        return (
            <Page>
                <Header>ActionSheet</Header>
                {actionSheet}
                <ButtonGroup>
                    <PrimaryButton onClick={this.onClick.bind(this)}>
                        点击上拉 ActionSheet
                    </PrimaryButton>
                </ButtonGroup>
            </Page>
        );
    }
}
