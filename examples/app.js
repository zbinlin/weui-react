"use strict";

import React, { Component } from "react";

import {
    Button, PrimaryButton, WarningButton, DefaultButton,
    Icon,
    Progress,
    Cells, Cell, Link, Radio, Checkbox, Switch, Select, Input,
} from "..";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canceled: false,
        };
    }
    render() {
        let icon = <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
                        alt="icon"
                        style={{width: "20px", marginRight: "5px", display: "block"}} />;
        const QRCODE_IMG = "data:image/png;base64,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";
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
                    <Cells title={"Checkbox Example"}>
                        <Checkbox id="c1" name="xx1">测试 Checkbox1</Checkbox>
                        <Checkbox id="c2" name="xx2" defaultChecked={true}>Checkbox2</Checkbox>
                        <Checkbox id="c3" name="xx3" disabled>Checkbox3(disabled)</Checkbox>
                    </Cells>
                    <Cells title={"Switcher Example"}>
                        <Switch id="s1" name="sx1" defaultChecked={true}>开关</Switch>
                    </Cells>
                    <Cells title={"Select Example"}>
                        <Select id="s2" name="sx2" options={[["name", 10], 20, "three"]} selectedIndex={1}>选择</Select>
                        <Select id="s3" name="sx3" options={[["name", 10], 20, "three"]} defaultValue={"three"}>选择</Select>
                    </Cells>
                    <Cells title={"Input Example"}>
                        <Input type="date" valid="true">日期</Input>
                        <Input type="datetime-local">时间</Input>
                        <Input footer={<img src={QRCODE_IMG} height={44} />}>验证码</Input>
                    </Cells>
                </div>
            </div>
        );
    }
}
