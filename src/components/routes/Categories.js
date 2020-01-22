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

const routes = [
  {name: 'Running', path: '/running-calc', calcQ: 2, icon: RunningIcon},
  {name: 'Swimming', path: '/swimming-calc', calcQ: 1, icon: SwimmingIcon},
  {name: 'Cycling', path: '', calcQ: 0, icon: CyclingIcon},
  {name: 'Gym', path: '/gym-calc', calcQ: 1, icon: GymIcon},
  {name: 'Health', path: '/health-calc', calcQ: 1, icon: HeartRateIcon},
  {name: '', path: '', calcQ: '', icon: ''}
];

const Categories = ({updateChosenCalculator}) => {
  updateChosenCalculator();
  return (
    <div className={styles.categories}>
      {routes.map(route => (
        <Link to={route.path}>
          <CalcPuzzle icon={route.icon} calcQ={route.calcQ}>
            {route.name}
          </CalcPuzzle>
        </Link>
      ))}
    </div>
  );
};

export default connect(null, {updateChosenCalculator})(Categories);
