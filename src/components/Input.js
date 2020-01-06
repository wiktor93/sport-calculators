import React from "react";

import styles from "../styles/Input.module.scss";

const Input = ({name, value}) => {
  return (
    <input 
      className={styles.input} 
      type="number" 
      name={name} 
      value={value}
     />
  );
};

export default Input;
