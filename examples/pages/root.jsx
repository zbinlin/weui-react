"use strict";

import React, { Component } from "react";
import history from "../history";

import Page, { Header } from "./base";
import { Cells, Link } from "../..";

export default class IndexPage extends Component {
    goto(url) {
        return () => {
            history.push(url);
        };
    }
    render() {
        let icon = src => {
            return <img src={src} style={{width: 28, marginRight: "0.7em", display: "block"}} />;
        };
        return (
            <Page>
                <Header description="为微信 Web 服务量身设计">
                    WeUI
                </Header>
                <Cells style={{background: "transparent"}}>
                    <Link header={icon("images/icon_nav_button.png")}
                          onClick={this.goto("/button")}>Button</Link>
                    <Link header={icon("images/icon_nav_cell.png")}
                          onClick={this.goto("/cell")}>Cell</Link>
                    <Link header={icon("images/icon_nav_toast.png")}
                          onClick={this.goto("/toast")}>Toast</Link>
                    <Link header={icon("images/icon_nav_dialog.png")}
                          onClick={this.goto("/dialog")}>Dialog</Link>
                    <Link header={icon("images/icon_nav_button.png")}
                          onClick={this.goto("/progress")}>Progress</Link>
                    <Link header={icon("images/icon_nav_icons.png")}
                          onClick={this.goto("/msg")}>Msg Page</Link>
                    <Link header={icon("images/icon_nav_article.png")}
                          onClick={this.goto("/article")}>Article</Link>
                    <Link header={icon("images/icon_nav_actionSheet.png")}
                          onClick={this.goto("/action-sheet")}>ActionSheet</Link>
                    <Link header={icon("images/icon_nav_icons.png")}
                          onClick={this.goto("/icons")}>Icons</Link>
                </Cells>
            </Page>
        );
    }
}
