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
import PeopleId from "./containers/people/people-id";
import StarshipsId from "./containers/starships/starships-id";
import VehiclesId from "./containers/vehicles/vehicles-id";
import SpeciesId from "./containers/species/species-id";
import PlanetsId from "./containers/planets/planets-id";
import FilmsId from "./containers/films/films-id";

export default function Routes() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/films" component={Films} />
        <Route path="/films/:id" component={FilmsId} />
        <Route exact path="/species" component={Species} />
        <Route path="/species/:id" component={SpeciesId} />
        <Route exact path="/vehicles" component={Vehicles} />
        <Route path="/vehicles/:id" component={VehiclesId} />
        <Route exact path="/starships" component={Starships} />
        <Route path="/starships/:id" component={StarshipsId} />
        <Route exact path="/people" component={People} />
        <Route path="/people/:id" component={PeopleId} />
        <Route exact path="/planets" component={Planets} />
        <Route path="/planets/:id" component={PlanetsId} />
        <Route exact path="/" component={Home} />
        <Route component={page404} />
      </Switch>
    </Router>
  );
}
