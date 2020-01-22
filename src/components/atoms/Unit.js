import React from 'react';

import styles from '../../styles/Unit.module.scss';

const Unit = ({children}) => {
  return <div className={styles.unit}>{children}</div>;
};

export default Unit;
