import React from 'react';
import { HashRouter  as Router, Route, Redirect, NotFoundRoute } from "react-router-dom";
// import { BrowserRouter  as Router, Route, Redirect, NotFoundRoute } from "react-router-dom";

import Login from "../view/Login"; //登入
import Test from "../view/Test"; //登入
import Page from "../view/Page"

const AppRoute = (props) => {
    return (
        <Router>
            <Route exact path="/"><Login /></Route> {/* 登入 */}
            <Route exact path="/page"><Page /></Route> {/* 登入 */}
        </Router>
    )
}

export default AppRoute