import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginScreen } from "../screens/login/LoginScreen";
import { DashBoardRoutes } from "./DashBoardRoutes";


export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route path="/" component={DashBoardRoutes} />
        </Switch>
      </div>
    </Router>
  );
};
