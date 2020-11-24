import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppBar from "../components/AppBar";
import Home from "../views/Home";

export default function MyRoutes() {
  return (
    <Router>
      <AppBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/search"></Route>
      </Switch>
    </Router>
  );
}
