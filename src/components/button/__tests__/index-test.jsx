"use strict";
/* eslint-env jest */

jest.dontMock("../base");
jest.dontMock("../primary");
jest.dontMock("../warning");
jest.dontMock("../default");
jest.dontMock("../index");
jest.dontMock("../primary.scss");

import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";

/* 这里不能用 import */
const {
    default: Button,
    PrimaryButton,
    WarningButton,
    DefaultButton
} = require("../index");

import primaryStyle from "../primary.scss";
import warningStyle from "../warning.scss";
import defaultStyle from "../default.scss";
const classNames = require("classnames/bind");

const primaryCx = classNames.bind(primaryStyle);
const warningCx = classNames.bind(warningStyle);
const defaultCx = classNames.bind(defaultStyle);

describe("Button 组件", () => {
    it("如果 is 属性未指定，应该是 PrimaryButton", () => {
        let renderer = TestUtils.createRenderer();
        renderer.render(
            <Button>按钮</Button>
        );
        let output = renderer.getRenderOutput();
        expect(TestUtils.isElementOfType(output, PrimaryButton)).toBeTruthy();
    });
    it("如果 is 属性为 primary-btn 时，应该是 PrimaryButton", () => {
        let renderer = TestUtils.createRenderer();
        renderer.render(
            <Button is="primary-btn">按钮</Button>
        );
        let output = renderer.getRenderOutput();
        expect(TestUtils.isElementOfType(output, PrimaryButton)).toBeTruthy();
    });
    it("如果 is 属性为 warning-btn 时，应该是 PrimaryButton", () => {
        let renderer = TestUtils.createRenderer();
        renderer.render(
            <Button is="warning-btn">按钮</Button>
        );
        let output = renderer.getRenderOutput();
        expect(TestUtils.isElementOfType(output, WarningButton)).toBeTruthy();
    });
    it("如果 is 属性为 warning-btn 时，应该是 default-btn", () => {
        let renderer = TestUtils.createRenderer();
        renderer.render(
            <Button is="default-btn">按钮</Button>
        );
        let output = renderer.getRenderOutput();
        expect(TestUtils.isElementOfType(output, DefaultButton)).toBeTruthy();
    });
});

describe("PrimaryButton 组件", () => {
    let rootName = "root";
    let root = primaryCx(rootName);
    it(`默认时 className 应该是 ${root}`, () => {
        let renderer = TestUtils.createRenderer();
        renderer.render(
            <PrimaryButton>Primary 按钮</PrimaryButton>
        );
        let output = renderer.getRenderOutput();
        expect(output.props.cx(rootName)).toBe(root);
    });

    let disabledName = "disabled";
    let disabled = primaryCx(disabledName);
    it(`禁用时 className 应该含有 ${disabled}`, () => {
        let renderer = TestUtils.createRenderer();
        renderer.render(
            <PrimaryButton disabled>Primary 按钮</PrimaryButton>
        );
        let output = renderer.getRenderOutput();
        expect(output.props.cx(disabledName)).toBe(disabled);
    });
});

describe("WarningButton 组件", () => {
    let rootName = "root";
    let root = warningCx(rootName);
    it(`默认时 className 应该是 ${root}`, () => {
        let renderer = TestUtils.createRenderer();
        renderer.render(
            <WarningButton>Warning 按钮</WarningButton>
        );
        let output = renderer.getRenderOutput();
        expect(output.props.cx(rootName)).toBe(root);
    });

    let disabledName = "disabled";
    let disabled = warningCx(disabledName);
    it(`禁用时 className 应该含有 ${disabled}`, () => {
        let renderer = TestUtils.createRenderer();
        renderer.render(
            <WarningButton disabled>Warning 按钮</WarningButton>
        );
        let output = renderer.getRenderOutput();
        expect(output.props.cx(disabledName)).toBe(disabled);
    });
});

describe("DefaultButton 组件", () => {
    let rootName = "root";
    let root = defaultCx(rootName);
    it(`默认时 className 应该是 ${root}`, () => {
        let renderer = TestUtils.createRenderer();
        renderer.render(
            <DefaultButton>default 按钮</DefaultButton>
        );
        let output = renderer.getRenderOutput();
        expect(output.props.cx(rootName)).toBe(root);
    });

    let disabledName = "disabled";
    let disabled = defaultCx(disabledName);
    it(`禁用时 className 应该含有 ${disabled}`, () => {
        let renderer = TestUtils.createRenderer();
        renderer.render(
            <DefaultButton disabled>default 按钮</DefaultButton>
        );
        let output = renderer.getRenderOutput();
        expect(output.props.cx(disabledName)).toBe(disabled);
    });
});
