import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { DcScreen } from "../screens/dc/DcScreen";
import { HeroScreen } from "../screens/heroes/HeroScreen";
import { MarvelScreen } from "../screens/marvel/MarvelScreen";

export const DashBoardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/marvel/:heroeId" component={HeroScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Redirect to="/marvel"/>
        </Switch>
      </div>
    </>
  );
};
