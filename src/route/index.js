import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import login from "../page/login/login";
class RouterIndex extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={login} />
        </Switch>
      </HashRouter>
    );
  }
}

export default RouterIndex;
