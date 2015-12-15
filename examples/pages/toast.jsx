"use strict";

import React, { Component } from "react";

import Page, { Header } from "./base";

import {
    Toast,
    Loading,
    ButtonGroup,
    PrimaryButton,
} from "../../";

export default class ToastPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toast: false,
            loading: false,
        };
    }
    showToast() {
        this.setState({
            toast: true,
        }, () => {
            setTimeout(() => {
                this.setState({
                    toast: false,
                });
            }, 5000);
        });
    }
    showLoading() {
        this.setState({
            loading: true,
        }, () => {
            setTimeout(() => {
                this.setState({
                    loading: false,
                });
            }, 5000);
        });
    }
    render() {
        let toast = this.state.toast ? <Toast>已完成</Toast> : undefined;
        let loading = this.state.loading ? <Loading>加载中…</Loading> : undefined;
        return (
            <Page>
                <Header>Toast</Header>
                <div style={{marginTop: "4.5em"}}>
                    {toast}
                    {loading}
                    <ButtonGroup>
                        <PrimaryButton onClick={this.showToast.bind(this)}>点击弹出 Toast</PrimaryButton>
                        <PrimaryButton onClick={this.showLoading.bind(this)}>点击弹出 Loading Toast</PrimaryButton>
                    </ButtonGroup>
                </div>
            </Page>
        );
    }
}
