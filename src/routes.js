import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./pages";
import AverageMes from "./pages/avarageMes";
import AllData from "./pages/AllData";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/avg" exact component={AverageMes} />
    <Route path="/all" exact component={AllData} />
  </Switch>
);
export default Routes;
