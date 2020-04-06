import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import login from "../page/login/login";
import home from "../page/home/home";
class RouterIndex extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/home" component={home} />
          <Route exact path="/" component={login} />
        </Switch>
      </HashRouter>
    );
  }
}

export default RouterIndex;
