import React, {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

import styles from "../styles/Navigation.module.scss";

const routePaths = {
  Running: "/running-calc",
  Swimming: "/swimming-calc",
  Cycling: "/cycling-calc"
};

const Navigation = ({chosenCalculator}) => {
  const [calculatorName, setCalculatorName] = useState();

  useEffect(() => {
    setCalculatorName(chosenCalculator);
  }, [chosenCalculator]);

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink className={styles.item} exact to="/">
            Categories
          </NavLink>
        </li>

        {calculatorName && (
          <li>
            <span>> </span>
            <NavLink className={styles.item} to={routePaths[calculatorName]}>
              {calculatorName}
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    chosenCalculator: state.chosenCalculator
  };
};

export default connect(mapStateToProps, null)(Navigation);
