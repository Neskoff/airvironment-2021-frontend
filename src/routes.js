import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./pages";
import averageMes from "./pages/avarageMes";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/avg" exact component={averageMes} />
  </Switch>
);
export default Routes;
