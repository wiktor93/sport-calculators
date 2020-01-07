import React, {useState} from "react";
import Select from "react-select";

import Button from "../components/Button";
import Input from "../components/Input";
import Unit from "../components/Unit";
import styles from "../styles/RunningCalc.module.scss";

const RunningView = () => {
  const [inputValues, setInputValue] = useState(defaultInputValues);
  return (
    <>
      <section className={styles.calcWrap}>
        <h3>Runnning Pace Calculator</h3>
        <p className={styles.note}>
          With this calculator you can check what is the minimum average speed
          and pace to achieve your goal. To get the result, you have to complete
          minimally two fields.
        </p>
        <form>
          <div className={styles.inputGroup}>
            <label>Distance (type or select): </label>
            <Input
              name="kilometers"
              value={inputValues.kilometers}
              onChange={e =>
                setInputValue({
                  ...inputValues,
                  kilometers: e.target.value,
                  selected: defaultInputValues.selected
                })
              }
            />
            <Unit>km</Unit>

            <Input
              name="meters"
              value={inputValues.meters}
              onChange={e =>
                setInputValue({
                  ...inputValues,
                  meters: e.target.value,
                  selected: defaultInputValues.selected
                })
              }
            />
            <Unit>m</Unit>

            <Select
              className={styles.select}
              options={raceOptions}
              isSearchable={false}
              placeholder={inputValues.selected}
              value={inputValues.selected}
              onChange={e =>
                setInputValue({
                  ...inputValues,
                  kilometers: e.value,
                  meters: e.m,
                  selected: e.label
                })
              }
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Time (your planned result): </label>
            <Input
              name="hours"
              value={inputValues.hours}
              onChange={e =>
                setInputValue({...inputValues, hours: e.target.value})
              }
            />
            <Unit>hrs</Unit>
            <Input
              name="minutes"
              value={inputValues.minutes}
              onChange={e =>
                setInputValue({...inputValues, minutes: e.target.value})
              }
            />
            <Unit>min</Unit>
            <Input
              name="seconds"
              value={inputValues.seconds}
              onChange={e =>
                setInputValue({...inputValues, seconds: e.target.value})
              }
            />
            <Unit>sec</Unit>
          </div>
          <div className={styles.inputGroup}>
            <label>Pace / kilometer </label>
            <Input
              name="paceMinutes"
              value={inputValues.paceMinutes}
              onChange={e =>
                setInputValue({...inputValues, paceMinutes: e.target.value})
              }
            />
            <Unit>min</Unit>
            <Input
              name="paceSeconds"
              value={inputValues.paceSeconds}
              onChange={e =>
                setInputValue({...inputValues, paceSeconds: e.target.value})
              }
            />
            <Unit>sec</Unit>
          </div>
          <div className={styles.inputGroup}>
            <label>Speed </label>
            <Input
              name="speed"
              value={inputValues.speed}
              onChange={e =>
                setInputValue({...inputValues, speed: e.target.value})
              }
            />
            <Unit>km/h</Unit>
          </div>
          <div className={styles.btnContainer}>
            <Button
              onClick={e => {
                e.preventDefault();
                setInputValue({...defaultInputValues});
              }}
            >
              Reset
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};

const defaultInputValues = {
  kilometers: "",
  meters: "",
  hours: "",
  minutes: "",
  seconds: "",
  paceMinutes: "",
  paceSeconds: "",
  speed: "",
  selected: "Select..."
};

const raceOptions = [
  {value: "42", m: "195", label: "Marathon"},
  {value: "21", m: "98", label: "Half-marathon"},
  {value: "20", m: "", label: "20 km"},
  {value: "15", m: "", label: "15 km"},
  {value: "10", m: "", label: "10 km"},
  {value: "5", m: "", label: "5 km"},
  {value: "1", m: "", label: "1 km"}
];

export default RunningView;
