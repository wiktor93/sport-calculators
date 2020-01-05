import React from "react";

import Categories from "./Categories";
import styles from "../styles/App.module.scss";

function App() {
  return (
    <div className={styles.wrap}>
      <h1>Sport calculators</h1>
      <Categories />
    </div>
  );
}

export default App;
