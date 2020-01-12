import React from "react";

import styles from "../styles/CalcPuzzle.module.scss";

const CalcPuzzle = ({children, icon, calcQ}) => {
  return (
    <div className={styles.puzzle}>
      <img src={icon} alt={children} />

      <h2>{children}</h2>
      <span>
        {calcQ ? calcQ : 0} {calcQ === 1 ? "calculator" : "calculators"}
      </span>
    </div>
  );
};

export default CalcPuzzle;
