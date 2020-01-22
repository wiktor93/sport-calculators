import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Navigation from '../components/molecules/Navigation';
import Categories from '../components/routes/Categories';
import RunnnigCalc from '../components/routes/RunnigCalc';
import SwimmingCalc from '../components/routes/SwimmingCalc';
import CyclingCalc from '../components/routes/CyclingCalc';
import GymCalc from '../components/routes/GymCalc';
import HealthCalc from '../components/routes/HealthCalc';

function App() {
  return (
    <BrowserRouter basename="sport-calculators">
      <div className="wrap">
        <h1>Sport calculators</h1>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Categories} />
          <Route path="/running-calc" component={RunnnigCalc} />
          <Route path="/swimming-calc" component={SwimmingCalc} />
          <Route path="/cycling-calc" component={CyclingCalc} />
          <Route path="/gym-calc" component={GymCalc} />
          <Route path="/health-calc" component={HealthCalc} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
