import React from "react";
import {connect} from "react-redux";

import RunningPace from "../components/Running/RunningPace";
import TimeSegment from "../components/Running/TimeSegment";
import {updateChosenCalculator} from "../actions/index";

const RunningCalc = ({updateChosenCalculator}) => {
  updateChosenCalculator("Running");

  return (
    <>
      <RunningPace />
      <TimeSegment />
    </>
  );
};

export default connect(null, {updateChosenCalculator})(RunningCalc);
