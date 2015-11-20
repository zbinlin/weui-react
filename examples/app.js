"use strict";

import React, { Component } from "react";

import {
    Button, PrimaryButton, WarningButton, DefaultButton,
    Icon,
    Progress,
    Cells, Cell, Link, Radio
} from "..";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canceled: false
        };
    }
    render() {
        let icon = <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
                        alt="icon"
                        style={{width: "20px", marginRight: "5px", display: "block"}} />;
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
                    <Cells title={<h3 style={{margin: 0}}>Heading</h3>}>
                        <Cell>Hello World</Cell>
                    </Cells>
                    <Cells>
                        <Cell>Hello World</Cell>
                    </Cells>
                    <Cells title={<h3 style={{margin: 0}}>Heading</h3>}>
                        <Cell header={icon}>Hello World</Cell>
                    </Cells>
                    <Cells title={<h3 style={{margin: 0}}>Heading</h3>}>
                        <Cell footer={<p style={{margin: 0}}>Description</p>}>Hello World</Cell>
                        <Link href="javascript:">Hello World</Link>
                        <Link header={icon}>Hello World</Link>
                        <Link footer={<p style={{margin: 0}}>Description</p>}>Hello World</Link>
                    </Cells>
                    <Cells title={"Radio Example"}>
                        <Radio id="r1" name="xxx">Radio1</Radio>
                        <Radio id="r2" name="xxx" defaultChecked={true}>Radio2</Radio>
                        <Radio id="r3" name="xxx" disabled>Radio3(disabled)</Radio>
                    </Cells>
                </div>
            </div>
        );
    }
}
