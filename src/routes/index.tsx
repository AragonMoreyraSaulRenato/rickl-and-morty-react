import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppBar from "../components/AppBar";
import Characters from "../views/Characters";
import Home from "../views/Home";
import Memoram from "../views/Memoram";

export default function MyRoutes() {
	return (
		<Router>
			<AppBar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path={"/characters"} component={Characters} />
				<Route exact path={"/memoram"} component={Memoram} />
			</Switch>
		</Router>
	);
}
