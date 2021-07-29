import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./pages";
import AverageMes from "./pages/avarageMes";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/avg" exact component={AverageMes} />
  </Switch>
);
export default Routes;
