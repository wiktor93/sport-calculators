import React from "react";
import {Link} from "react-router-dom";

import CalcPuzzle from "./CalcPuzzle";
import RunningIcon from "../img/running.svg";
import SwimmingIcon from "../img/swimming.svg";
import CyclingIcon from "../img/cycling.svg";
import GymIcon from "../img/gym.svg";
import BenchPressIcon from "../img/bench-press.svg";
import HeartRateIcon from "../img/heart-rate.svg";
import styles from "../styles/Categories.module.scss";

const Categories = () => {
  return (
    <div className={styles.categories}>
      <Link to="/running-calc">
        <CalcPuzzle icon={RunningIcon} calcQ={2}>
          Running
        </CalcPuzzle>
      </Link>
      <Link to="/swimming-calc">
        <CalcPuzzle icon={SwimmingIcon}>Swimming</CalcPuzzle>
      </Link>
      <Link to="/cycling-calc">
        <CalcPuzzle icon={CyclingIcon}>Cycling</CalcPuzzle>
      </Link>

      <CalcPuzzle icon={GymIcon}>Gym</CalcPuzzle>
      <CalcPuzzle icon={BenchPressIcon}>Bench Press</CalcPuzzle>
      <CalcPuzzle icon={HeartRateIcon}>Health</CalcPuzzle>
    </div>
  );
};

export default Categories;
