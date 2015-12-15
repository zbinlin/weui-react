"use strict";

import React, { Component } from "react";

import Page, { Header } from "./base";

import {
    Progress,
} from "../../";

export default class ProgressPage extends Component {
    onCancel() {
        alert("cancel");
    }
    render() {
        return (
            <Page>
                <Header>Progress</Header>
                <ul style={{margin: "0 5%", listStyle: "none", padding: 0}}>
                    <li style={{marginBottom: 10}}><Progress value={50} max={100} onCancel={this.onCancel.bind(this)} /></li>
                    <li style={{marginBottom: 10}}><Progress value={30} max={100} canceled /></li>
                    <li style={{marginBottom: 10}}><Progress value={20} max={100} onCancel={this.onCancel.bind(this)} /></li>
                </ul>
            </Page>
        );
    }
}
