"use strict";

import React, { Component } from "react";

import {
    Button, PrimaryButton, WarningButton, DefaultButton,
    Icon,
    Progress,
    Cells, Cell
} from "..";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canceled: false
        };
    }
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
                <hr />
                <PrimaryButton size="small">按钮</PrimaryButton>
                <hr />
                <WarningButton size="small" disabled>按钮</WarningButton>
                <hr />
                <DefaultButton size="small" outline>按钮</DefaultButton>
                <hr />
                <hr />
                <div>
                    <Icon />
                    <Icon type="circle" />
                    <Icon type="download" />
                    <Icon type="info" />
                    <Icon type="safe-success" />
                    <Icon type="safe-warning" />
                    <Icon type="success" />
                    <Icon type="success-circle" />
                    <Icon type="success-no-circle" />
                    <Icon type="waiting" />
                    <Icon type="waiting-circle" />
                    <Icon type="warning" />
                    <Icon type="info-circle" />
                    <Icon type="cancel" />
                </div>
                <div>
                    <Icon />
                    <Icon size="large" type="circle" />
                    <Icon size="large" type="download" />
                    <Icon size="large" type="info" />
                    <Icon size="large" type="safe-success" />
                    <Icon size="large" type="safe-warning" />
                    <Icon size="large" type="success" />
                    <Icon size="large" type="success-circle" />
                    <Icon size="large" type="success-no-circle" />
                    <Icon size="large" type="waiting" />
                    <Icon size="large" type="waiting-circle" />
                    <Icon size="large" type="warning" />
                    <Icon size="large" type="info-circle" />
                    <Icon size="large" type="cancel" />
                </div>
                <div>
                    <Progress value={0} max={1.0} />
                    <br />
                    <Progress value={50} max={100} />
                    <br />
                    <Progress value={120} max={150} />
                    <br />
                    <Progress value={120} max={150} onCancel={() => { alert("cancel"); this.setState({ canceled: true }); }} canceled={this.state.canceled} />
                </div>
                <hr />
                <div>
                    <Cells>
                        <Cell>Hello World</Cell>
                    </Cells>
                    <Cells title={<h3 style={{margin: 0}}>Heading</h3>}>
                        <Cell>Hello World</Cell>
                    </Cells>
                    <Cells title={<h3 style={{margin: 0}}>Heading</h3>}>
                        <Cell header={<Icon type="info" />}>Hello World</Cell>
                    </Cells>
                    <Cells title={<h3 style={{margin: 0}}>Heading</h3>}>
                        <Cell footer={<p style={{margin: 0}}>Description</p>}>Hello World</Cell>
                        <Cell href="">Hello World</Cell>
                    </Cells>
                </div>
            </div>
        );
    }
}
