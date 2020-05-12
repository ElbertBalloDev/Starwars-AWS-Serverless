import React from "react";
import { Route, Switch } from "react-router-dom";
import OpenBounties from './components/OpenBounties';
import NotFound from "./containers/NotFound/NotFound";
import Login from "./containers/Login/Login";
import Signup from "./containers/Signup/Signup";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/"><Login/></Route>
      <Route exact path="/open-bounties"><OpenBounties /></Route>
      <Route exact path="/signup"><Signup/></Route>
      <Route><NotFound /></Route>
    </Switch>
  );
}