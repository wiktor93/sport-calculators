import React from "react";

import styles from "../styles/CalcPuzzle.module.scss";

const CalcPuzzle = ({children, icon}) => {
  return (
    <div className={styles.puzzle}>
      <img src={icon} alt={children} />

      <h2>{children}</h2>
      <span>2 calculators</span>
    </div>
  );
};

export default CalcPuzzle;
