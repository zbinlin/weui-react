"use strict";

jest.dontMock("../index");

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

describe("test Button", () => {
    it("innerHTML 应该为“按钮”", () => {
        let button = TestUtils.renderIntoDocument(
            <Button>按钮</Button>
        );
        let btnNode = ReactDOM.findDOMNode(button);
        expect(btnNode.textContent).toEqual("按钮");
    });
});

describe("test PrimaryButton", () => {
    it("innerHTML 应该为“按钮”", () => {
        let renderer = TestUtils.createRenderer();
        renderer.render(
            <PrimaryButton>按钮</PrimaryButton>
        );
        let output = renderer.getRenderOutput();
        expect(TestUtils.isElementOfType(output, Button)).toBeTruthy();
    });
});

describe("test WarningButton", () => {
    it("innerHTML 应该为“按钮”", () => {
        let renderer = TestUtils.createRenderer();
        renderer.render(
            <PrimaryButton>按钮</PrimaryButton>
        );
        let output = renderer.getRenderOutput();
        expect(TestUtils.isElementOfType(output, Button)).toBeTruthy();
    });
});

describe("test DefaultButton", () => {
    it("innerHTML 应该为“按钮”", () => {
        let renderer = TestUtils.createRenderer();
        renderer.render(
            <PrimaryButton>按钮</PrimaryButton>
        );
        let output = renderer.getRenderOutput();
        expect(TestUtils.isElementOfType(output, Button)).toBeTruthy();
    });
});

