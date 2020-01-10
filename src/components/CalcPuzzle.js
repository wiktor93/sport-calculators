import React from "react";
import {connect} from "react-redux";

import {updateChosenCalculator} from "../actions/index";
import styles from "../styles/CalcPuzzle.module.scss";

const CalcPuzzle = ({children, icon, calcQ, updateChosenCalculator}) => {
  return (
    <div
      className={styles.puzzle}
      onClick={() => updateChosenCalculator(children)}
    >
      <img src={icon} alt={children} />

      <h2>{children}</h2>
      <span>
        {calcQ ? calcQ : 0} {calcQ === 1 ? "calculator" : "calculators"}
      </span>
    </div>
  );
};

export default connect(null, {updateChosenCalculator})(CalcPuzzle);
