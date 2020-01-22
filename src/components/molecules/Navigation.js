import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import styles from '../../styles/Navigation.module.scss';

const routePaths = {
  Running: '/running-calc',
  Swimming: '/swimming-calc',
  Cycling: '/cycling-calc',
  Gym: '/gym-calc',
  Health: '/health-calc'
};

const Navigation = ({chosenCalculator}) => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink className={styles.item} exact to="/">
            Categories
          </NavLink>
        </li>

        {chosenCalculator && (
          <li>
            <span>> </span>
            <NavLink className={styles.item} to={routePaths[chosenCalculator]}>
              {chosenCalculator}
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

const mapStateToProps = ({chosenCalculator}) => {
  return {
    chosenCalculator
  };
};

export default connect(mapStateToProps, null)(Navigation);
