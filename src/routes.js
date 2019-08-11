import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import Devs from "./screens/Devs";
import Login from "./screens/Login";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/dev/:_id' component={Devs} />
      </Switch>
    </BrowserRouter>
  );
}
