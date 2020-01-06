import React from "react";

import styles from "../styles/Unit.module.scss";

const Unit = ({children}) => {
  return <div className={styles.Unit}>{children}</div>;
};

export default Unit;
