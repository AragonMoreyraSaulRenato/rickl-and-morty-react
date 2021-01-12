import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppBar from "../components/AppBar";
import Characters from "../views/Characters";
import Home from "../views/Home";

export default function MyRoutes() {
  return (
    <Router>
      <AppBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path={[
            "/characters",
            "/characters?:page/:search",
            "/characters?:page",
            "/characters?:search",
          ]}
          component={Characters}
        />
      </Switch>
    </Router>
  );
}
