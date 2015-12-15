"use strict";

import React, { Component } from "react";

import Page, { Header } from "./base";
import {
    ButtonGroup, Button, PrimaryButton, WarningButton, DefaultButton,
} from "../../";

export default class ButtonPage extends Component {
    render() {
        return (
            <Page>
                <Header style={{color: "#225FBA"}}>Button</Header>
                <ButtonGroup>
                    <Button is="primary-btn">按钮</Button>
                    <PrimaryButton disabled>按钮</PrimaryButton>
                    <Button is="warning-btn">按钮</Button>
                    <WarningButton disabled>按钮</WarningButton>
                    <Button is="default-btn">按钮</Button>
                    <DefaultButton disabled>按钮</DefaultButton>
                    <ButtonGroup style={{width: "60%", marginLeft: "auto", marginRight: "auto"}}>
                        <DefaultButton outline>按钮</DefaultButton>
                        <PrimaryButton outline>按钮</PrimaryButton>
                    </ButtonGroup>
                    <ButtonGroup align="justify" style={{width: "60%", marginLeft: "auto", marginRight: "auto"}}>
                        <PrimaryButton size="small">按钮</PrimaryButton>
                        <DefaultButton size="small">按钮</DefaultButton>
                    </ButtonGroup>
                </ButtonGroup>
            </Page>
        );
    }
}
