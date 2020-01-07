import React from "react";

import styles from "../styles/Button.module.scss";

const Button = ({children, onClick, form}) => {
  return (
    <button form={form} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
