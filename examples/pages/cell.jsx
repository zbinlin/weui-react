"use strict";

import React, { Component } from "react";

import Page, { Header } from "./base";
import {
    Cells,
    Cell,
    Link,
    Radio,
    Checkbox,
    Switch,
    Input,
    Textarea,
    Select,
    PrimaryButton,
    ButtonGroup,
    Tips,
} from "../../";

export default class CellPage extends Component {
    changeVCode() {
        alert("change img src");
    }
    render() {
        let icon = <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
                        alt="icon"
                        style={{width: "20px", marginRight: "5px", display: "block"}} />;
        let vcode = <img src="images/vcode.jpg" onClick={this.changeVCode} height="44" />;
        return (
            <Page>
                <Header style={{color: "#225FBA"}}>Cell</Header>
                <Cells title="带说明的列表项">
                    <Cell footer="说明文字">标题文字</Cell>
                </Cells>
                <Cells title="带图标、说明的列表项">
                    <Cell header={icon} footer="说明文字">
                        标题文字
                    </Cell>
                    <Cell header={icon} footer="说明文字">
                        标题文字
                    </Cell>
                </Cells>
                <Cells title="带跳转的列表项">
                    <Link>cell standard</Link>
                    <Link>cell standard</Link>
                </Cells>
                <Cells title="带说明、跳转的列表项">
                    <Link footer="说明文字">cell standard</Link>
                    <Link footer="说明文字">cell standard</Link>
                </Cells>
                <Cells title="带图标、说明、跳转的列表项">
                    <Link footer="说明文字">cell standard</Link>
                    <Link footer="说明文字">cell standard</Link>
                </Cells>
                <Cells title="单选列表项">
                    <Radio name="r1">cell standard</Radio>
                    <Radio name="r1" defaultChecked>cell standard</Radio>
                    <Radio name="r1" disabled>disabled radio</Radio>
                </Cells>
                <Cells title="复选列表项">
                    <Checkbox name="c1" defaultChecked>standard is dealt for u.</Checkbox>
                    <Checkbox name="c2">standard is dealicient for u.</Checkbox>
                </Cells>
                <Cells title="开关">
                    <Switch>标题文字</Switch>
                    <Switch defaultChecked>默认：开</Switch>
                </Cells>
                <form>
                    <Cells title="表单">
                        <Input label="qq" placeholder="请输入qq号" />
                        <Input label="验证码" placeholder="请输入验证码" footer={vcode} />
                        <Input label="银行卡" placeholder="请输入银行卡号" />
                        <Input label="验证码" placeholder="请输入验证码" footer={vcode} valid={false} />
                    </Cells>
                    <Tips>底部说明文字底部说明文字</Tips>
                    <ButtonGroup>
                        <PrimaryButton>确定</PrimaryButton>
                    </ButtonGroup>
                </form>
                <Cells title="文本域">
                    <Textarea placeholder="请输入评论" />
                </Cells>
                <Cells title="表单报错">
                    <Input defaultValue="weui input error" type="number" valid={false}>卡号</Input>
                    <Input type="date">日期</Input>
                    <Input type="datetime-local">时间</Input>
                </Cells>
                <Cells title="选择">
                    <Input header={
                        <Select options={[["+86", 86], ["+01", 1]]} />}
                        placeholder="请输入号码" type="tel" />
                </Cells>
                <Cells title="选择">
                    <Select options={[["微信号", "wechat"], ["QQ号", "qq"], ["email"]]} />
                    <Select label="国家/地区"
                            options={[["中国"], ["美国"], ["英国"]]} />
                </Cells>
            </Page>
        );
    }
}
