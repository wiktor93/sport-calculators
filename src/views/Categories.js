import React from "react";
import {Link} from "react-router-dom";

import {connect} from "react-redux";
import {updateChosenCalculator} from "../actions/index";

import CalcPuzzle from "../components/CalcPuzzle";
import RunningIcon from "../images/running.svg";
import SwimmingIcon from "../images/swimming.svg";
import CyclingIcon from "../images/cycling.svg";
import GymIcon from "../images/gym.svg";
import HeartRateIcon from "../images/heart-rate.svg";
import styles from "../styles/Categories.module.scss";

const Categories = ({updateChosenCalculator}) => {
  updateChosenCalculator();
  return (
    <div className={styles.categories}>
      <Link to="/running-calc">
        <CalcPuzzle icon={RunningIcon} calcQ={2}>
          Running
        </CalcPuzzle>
      </Link>

      {/* <Link to="/swimming-calc"> */}
      <CalcPuzzle icon={SwimmingIcon} calcQ={0}>
        Swimming
      </CalcPuzzle>
      {/* </Link> */}
      {/* <Link to="/cycling-calc"> */}
      <CalcPuzzle icon={CyclingIcon} calcQ={0}>
        Cycling
      </CalcPuzzle>
      {/* </Link> */}

      <Link to="/gym-calc">
        <CalcPuzzle icon={GymIcon} calcQ={0}>
          Gym
        </CalcPuzzle>
      </Link>

      <CalcPuzzle icon={HeartRateIcon}>Health</CalcPuzzle>
    </div>
  );
};

export default connect(null, {updateChosenCalculator})(Categories);
