import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Navigation from "../components/Navigation";
import Categories from "../components/Categories";
import RunnnigCalc from "./RunnigCalc";
import SwimmingCalc from "./SwimmingCalc";
import CyclingCalc from "./CyclingCalc";

function MainView() {
  return (
    <BrowserRouter>
      <div className="wrap">
        <h1>Sport calculators</h1>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Categories} />
          <Route path="/running-calc" component={RunnnigCalc} />
          <Route path="/swimming-calc" component={SwimmingCalc} />
          <Route path="/cycling-calc" component={CyclingCalc} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default MainView;
