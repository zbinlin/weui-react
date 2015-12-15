"use strict";

import React, { Component } from "react";

import Page, { Header } from "./base";

import {
    Article
} from "../..";

export default class ArticlePage extends Component {
    render() {
        return (
            <Page>
                <Header style={{color: "#DE7C23"}}>Article</Header>
                <Article>
                    <h1>大标题</h1>
                    <section>
                        <h2>章标题</h2>
                        <section>
                            <h3>1.1 节标题</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute</p>
                        </section>
                        <section>
                            <h3>1.2 节标题</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </section>
                    </section>
                </Article>
            </Page>
        );
    }
}
