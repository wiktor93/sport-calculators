import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Navigation from '../components/Navigation';
import Categories from './Categories';
import RunnnigCalc from './RunnigCalc';
import SwimmingCalc from './SwimmingCalc';
import CyclingCalc from './CyclingCalc';
import GymCalc from './GymCalc';
import HealthCalc from './HealthCalc';

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
