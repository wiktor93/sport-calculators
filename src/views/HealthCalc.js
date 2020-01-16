import React from 'react';
import {connect} from 'react-redux';

import BMI from '../components/Health/BMI';
import {updateChosenCalculator} from '../actions/index';

const HealthCalc = ({updateChosenCalculator}) => {
  updateChosenCalculator('Health');

  return (
    <>
      <BMI />
    </>
  );
};

export default connect(null, {updateChosenCalculator})(HealthCalc);
