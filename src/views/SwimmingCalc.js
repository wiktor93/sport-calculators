import React from 'react';
import {connect} from 'react-redux';

import {updateChosenCalculator} from '../actions/index';
import SwimmingPace from '../components/Swimming/SwimmingPace';

const SwimmingCalc = ({updateChosenCalculator}) => {
  updateChosenCalculator('Swimming');
  return <SwimmingPace />;
};

export default connect(null, {updateChosenCalculator})(SwimmingCalc);
