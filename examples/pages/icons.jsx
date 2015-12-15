"use strict";

import React, { Component } from "react";

import Page, { Header } from "./base";

import {
    Icon,
} from "../..";

export default class IconsPage extends Component {
    render() {
        return (
            <Page>
                <Header>Icons</Header>
                <div style={{width: "70%", margin: "0 auto", textAlign: "center"}}>
                    <Icon size="large" type="success" />
                    <Icon size="large" type="info" />
                    <Icon size="large" type="warning" />
                    <Icon size="large" type="waiting" />
                    <Icon size="large" type="safe-success" />
                    <Icon size="large" type="safe-warning" />
                </div>
                <div style={{width: "90%", margin: "1em auto", textAlign: "center"}}>
                    <Icon type="success" />
                    <Icon type="success-circle" />
                    <Icon type="success-no-circle" />
                    <Icon type="info" />
                    <Icon type="waiting" />
                    <Icon type="waiting-circle" />
                    <Icon type="circle" />
                    <Icon type="warning" />
                    <Icon type="download" />
                    <Icon type="info-circle" />
                    <Icon type="cancel" />
                    <Icon type="success" />
                </div>
            </Page>
        );
    }
}
