import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./views/home.js";
import injectContext from "./store/appContext.js";

//create your first component
const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/home" component={Home} />
				{/* <Route exact path="/planets" component={Planets} /> */}
				<Route render={() => <h1>Not found!</h1>} />
			</Switch>
		</BrowserRouter>
	);
};

export default injectContext(Layout);
