import React, {useState, useEffect} from "react";
import Select from "react-select";

import Button from "../components/Button";
import Input from "../components/Input";
import Unit from "../components/Unit";
import styles from "../styles/RunningCalc.module.scss";

const RunningCalc = () => {
  const [inputValues, setInputValue] = useState(defaultInputValues);

  useEffect(() => {
    // prettier-ignore
    const { kilometers, meters, hours, minutes, seconds,speed } = inputValues;

    const distance = +kilometers * 1000 + +meters;
    const time = +hours * 3600 + +minutes * 60 + +seconds;
    const paceTime = Math.floor((+time * 1000) / distance);
    const avgSpeed =
      distance && time ? (distance / 1000 / (time / 3600)).toFixed(2) : 0;

    if (speed !== avgSpeed) {
      setInputValue({
        ...inputValues,
        speed: avgSpeed,
        paceMinutes: paceTime
          ? Math.floor(paceTime / 60)
          : defaultInputValues.paceMinutes,
        paceSeconds: paceTime
          ? paceTime % 60 < 10
            ? `0${Math.floor(paceTime % 60)}`
            : Math.floor(paceTime % 60)
          : defaultInputValues.paceSeconds
      });
    }
  }, [inputValues]);

  return (
    <>
      <section className={styles.calcWrap}>
        <h3>Runnning Pace Calculator</h3>
        <p className={styles.note}>
          With this calculator you can check what is the minimum average speed
          and pace to achieve your goal.
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
                  kilometers: Math.abs(e.target.value),
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
                  meters: Math.abs(e.target.value),
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
                setInputValue({...inputValues, hours: Math.abs(e.target.value)})
              }
            />
            <Unit>hrs</Unit>
            <Input
              name="minutes"
              value={inputValues.minutes}
              onChange={e =>
                setInputValue({
                  ...inputValues,
                  minutes: Math.abs(e.target.value)
                })
              }
            />
            <Unit>min</Unit>
            <Input
              name="seconds"
              value={inputValues.seconds}
              onChange={e =>
                setInputValue({
                  ...inputValues,
                  seconds: Math.abs(e.target.value)
                })
              }
            />
            <Unit>sec</Unit>
          </div>
          <div className={styles.resultsContainer}>
            <div>
              <h4>Pace</h4>
              <div className={styles.result}>
                <p>
                  <span>{inputValues.paceMinutes}</span>:
                  <span>{inputValues.paceSeconds}</span> /km
                </p>
              </div>
            </div>
            <div>
              <h4>Speed</h4>
              <div className={styles.result}>
                <p>
                  <span>{inputValues.speed ? inputValues.speed : "--"}</span>{" "}
                  km/h
                </p>
              </div>
            </div>
          </div>

          <div className={styles.btnContainer}>
            <Button
              onClick={e => {
                e.preventDefault();
                setInputValue({...defaultInputValues});
              }}
            >
              Reset <i className="fas fa-undo-alt"></i>
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
  paceMinutes: "--",
  paceSeconds: "--",
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

export default RunningCalc;
