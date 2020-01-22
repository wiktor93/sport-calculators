import React, {useState, useEffect} from 'react';
import Select from 'react-select';

import {runningRaceOptions, defaultInputValues} from '../../assets/data';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Unit from '../atoms/Unit';
import styles from '../../styles/Calc.module.scss';

const RunningPace = () => {
  const [inputValues, setInputValue] = useState(defaultInputValues);

  const handleInputs = (e, obj = {}) => {
    setInputValue({...inputValues, [e.target.name]: e.target.value, ...obj});
  };

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
      {/* RUNNING PACE CALCULATOR */}
      <section className={styles.calcWrap}>
        <h3>Runnning Pace Calculator</h3>
        <p className={styles.note}>
          With this calculator, you can check what is the minimum average speed
          and pace to achieve your goal.
        </p>
        <form>
          {/* Distance */}
          <div className={styles.inputGroup}>
            <label>Distance (type or select): </label>
            <Input
              name="kilometers"
              value={inputValues.kilometers}
              onChange={e =>
                handleInputs(e, {selected: defaultInputValues.selected})
              }
            />
            <Unit>km</Unit>
            <Input
              name="meters"
              value={inputValues.meters}
              onChange={e =>
                handleInputs(e, {selected: defaultInputValues.selected})
              }
            />
            <Unit>m</Unit>
            <Select
              className={styles.select}
              options={runningRaceOptions}
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

          {/* Time */}
          <div className={styles.inputGroup}>
            <label>Time (your planned result): </label>
            <Input
              name="hours"
              value={inputValues.hours}
              onChange={e => handleInputs(e)}
            />
            <Unit>hrs</Unit>
            <Input
              name="minutes"
              value={inputValues.minutes}
              onChange={e => handleInputs(e)}
            />
            <Unit>min</Unit>
            <Input
              name="seconds"
              value={inputValues.seconds}
              onChange={e => handleInputs(e)}
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
                  <span>{inputValues.speed ? inputValues.speed : '--'}</span>{' '}
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

export default RunningPace;
