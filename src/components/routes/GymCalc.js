import React from 'react';
import {connect} from 'react-redux';

import OneRepMax from '../molecules/OneRepMax';
import {updateChosenCalculator} from '../../actions/index';

const GymCalc = ({updateChosenCalculator}) => {
  updateChosenCalculator('Gym');

  return (
    <>
      <OneRepMax />
    </>
  );
};

export default connect(null, {updateChosenCalculator})(GymCalc);
