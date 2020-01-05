import React from "react";

import CalcPuzzle from "./CalcPuzzle";
import styles from "../styles/Categories.module.scss";
import RunningIcon from "../img/running.svg";
import SwimmingIcon from "../img/swimming.svg";
import CyclingIcon from "../img/cycling.svg";
import GymIcon from "../img/gym.svg";
import BenchPressIcon from "../img/bench-press.svg";
import HeartRateIcon from "../img/heart-rate.svg";

const Categories = () => {
  return (
    <div className={styles.categories}>
      <CalcPuzzle icon={RunningIcon}>Running</CalcPuzzle>
      <CalcPuzzle icon={SwimmingIcon}>Swimming</CalcPuzzle>
      <CalcPuzzle icon={CyclingIcon}>Cycling</CalcPuzzle>
      <CalcPuzzle icon={GymIcon}>Gym</CalcPuzzle>
      <CalcPuzzle icon={BenchPressIcon}>Bench Press</CalcPuzzle>
      <CalcPuzzle icon={HeartRateIcon}>Health</CalcPuzzle>
    </div>
  );
};

export default Categories;
