import React from "react";
import Select from "react-select";

import Button from "../components/Button";
import Input from "../components/Input";
import styles from "../styles/RunningCalc.module.scss";
import Unit from "../components/Unit";

const RunningView = () => {
  return (
    <>
      <section className={styles.calcWrap}>
        <h3>Runnning Pace Calculator</h3>
        <p className={styles.note}>
          With this calculator you can check what is the minimum average speed
          and pace to achieve your goal. To get the result, you have to complete
          minimally two fields.
        </p>
        <form action="">
          <div className={styles.inputGroup}>
            <label>Distance (type or select): </label>
            <Input name="km" value="21" />
            <Unit>km</Unit>
            <Input name="m" value="098" />
            <Unit>m</Unit>
            <Select
              className={styles.select}
              options={raceOptions}
              isSearchable={false}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Time (your planned result): </label>
            <Input name="hours" value="" />
            <Unit>hrs</Unit>
            <Input name="minutes" value="" />
            <Unit>min</Unit>
            <Input name="seconds" />
            <Unit>sec</Unit>
          </div>
          <div className={styles.inputGroup}>
            <label>Pace / kilometer </label>
            <Input name="pace-min" value="4" />
            <Unit>min</Unit>
            <Input name="pace-sec" value="15" />
            <Unit>sec</Unit>
          </div>
          <div className={styles.inputGroup}>
            <label>Speed </label>
            <Input name="speed" value="12.5" />
            <Unit>km/h</Unit>
          </div>
        </form>

        <div className={styles.btnContainer}>
          <Button>Reset</Button>
        </div>
      </section>
    </>
  );
};

const raceOptions = [
  {value: "1", label: "1 km"},
  {value: "5", label: "5 km"},
  {value: "10", label: "10 km"},
  {value: "15", label: "15 km"},
  {value: "20", label: "25 km"},
  {value: "21,098", label: "Half-marathon"},
  {value: "42,195", label: "Marathon"}
];

export default RunningView;
