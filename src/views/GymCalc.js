import React from "react";
import {connect} from "react-redux";

import OneRepMax from "../components/Gym/OneRepMax";
import {updateChosenCalculator} from "../actions/index";

const GymCalc = ({updateChosenCalculator}) => {
  updateChosenCalculator("Gym");

  return (
    <>
      <OneRepMax />
    </>
  );
};

export default connect(null, {updateChosenCalculator})(GymCalc);
