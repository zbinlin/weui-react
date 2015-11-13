"use strict";

import React, { Component } from "react";

import { Button, PrimaryButton, WarningButton, DefaultButton } from "..";

export default class App extends Component {
    render() {
        return (
            <div>
                <Button>按钮</Button>
                <hr />
                <Button is="primary-btn">按钮</Button>
                <hr />
                <Button is="warning-btn">按钮</Button>
                <hr />
                <Button is="default-btn">按钮</Button>
                <hr />
                <PrimaryButton>按钮</PrimaryButton>
                <hr />
                <PrimaryButton disabled>按钮</PrimaryButton>
                <hr />
                <PrimaryButton outline>按钮</PrimaryButton>
                <hr />
                <PrimaryButton disabled outline>按钮</PrimaryButton>
                <hr />
                <WarningButton>按钮</WarningButton>
                <hr />
                <WarningButton disabled>按钮</WarningButton>
                <hr />
                <WarningButton outline>按钮</WarningButton>
                <hr />
                <WarningButton disabled outline>按钮</WarningButton>
                <hr />
                <DefaultButton>按钮</DefaultButton>
                <hr />
                <DefaultButton disabled>按钮</DefaultButton>
                <hr />
                <DefaultButton outline>按钮</DefaultButton>
                <hr />
                <DefaultButton disabled outline>按钮</DefaultButton>
            </div>
        );
    }
}
