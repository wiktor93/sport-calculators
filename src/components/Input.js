import React from "react";

import styles from "../styles/Input.module.scss";

const Input = ({name, value, onChange}) => {
  return (
    <input
      className={styles.input}
      type="number"
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
