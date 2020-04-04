import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import home  from '../page/home/home';
class RouterIndex extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={home} />
        </Switch>
      </HashRouter>
    );
  }
}

export default RouterIndex;
