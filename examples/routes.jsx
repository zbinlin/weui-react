"use strict";

import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import history from "./history";

import Index, {
    ButtonPage,
    CellPage,
    ToastPage,
    DialogPage,
    ProgressPage,
    MsgPage,
    ArticlePage,
    ActionSheetPage,
    IconsPage,
}from "./pages";

const Root = props => props.children;

export default () => {
    return (
        <Router history={history}>
            <Route path="/" component={Root}>
                <IndexRoute component={Index} />
                <Route path="button" component={ButtonPage} />
                <Route path="cell" component={CellPage} />
                <Route path="toast" component={ToastPage} />
                <Route path="dialog" component={DialogPage} />
                <Route path="progress" component={ProgressPage} />
                <Route path="msg" component={MsgPage} />
                <Route path="article" component={ArticlePage} />
                <Route path="action-sheet" component={ActionSheetPage} />
                <Route path="icons" component={IconsPage} />
            </Route>
        </Router>
    );
};
