import React from 'react';
import {connect} from 'react-redux';

import RunningPace from '../molecules/RunningPace';
import TimeSegment from '../molecules/TimeSegment';
import {updateChosenCalculator} from '../../actions/index';

const RunningCalc = ({updateChosenCalculator}) => {
  updateChosenCalculator('Running');

  return (
    <>
      <RunningPace />
      <TimeSegment />
    </>
  );
};

export default connect(null, {updateChosenCalculator})(RunningCalc);
