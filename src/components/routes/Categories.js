import React from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {updateChosenCalculator} from '../../actions/index';

import CalcPuzzle from '../molecules/CalcPuzzle';
import RunningIcon from '../../assets/images/running.svg';
import SwimmingIcon from '../../assets/images/swimming.svg';
import CyclingIcon from '../../assets/images/cycling.svg';
import GymIcon from '../../assets/images/gym.svg';
import HeartRateIcon from '../../assets/images/heart-rate.svg';
import styles from '../../styles/Categories.module.scss';

const Categories = ({updateChosenCalculator}) => {
  updateChosenCalculator();
  return (
    <div className={styles.categories}>
      <Link to="/running-calc">
        <CalcPuzzle icon={RunningIcon} calcQ={2}>
          Running
        </CalcPuzzle>
      </Link>

      <Link to="/swimming-calc">
        <CalcPuzzle icon={SwimmingIcon} calcQ={1}>
          Swimming
        </CalcPuzzle>
      </Link>

      {/* <Link to="/cycling-calc"> */}
      <CalcPuzzle icon={CyclingIcon} calcQ={0}>
        Cycling
      </CalcPuzzle>
      {/* </Link> */}

      <Link to="/gym-calc">
        <CalcPuzzle icon={GymIcon} calcQ={1}>
          Gym
        </CalcPuzzle>
      </Link>
      <Link to="/health-calc">
        <CalcPuzzle icon={HeartRateIcon} calcQ={1}>
          Health
        </CalcPuzzle>
      </Link>

      <CalcPuzzle empty></CalcPuzzle>
    </div>
  );
};

export default connect(null, {updateChosenCalculator})(Categories);
