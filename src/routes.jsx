import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/home";
import Planets from "./containers/planets";
import page404 from "./containers/page404";
import People from "./containers/people";
import Navbar from "./components/Navbar";
import Films from "./containers/films";
import Vehicles from "./containers/vehicles";
import Species from "./containers/species";
import Starships from "./containers/starships";

export default function Routes() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/films' component={Films} />
        <Route path='/species' component={Species} />
        <Route path='/vehicles' component={Vehicles} />
        <Route path='/starships' component={Starships} />
        <Route path="/people" component={People} />
        <Route path="/planets" component={Planets} />
        <Route exact path="/" component={Home} />
        <Route component={page404} />
      </Switch>
    </Router>
  );
}
