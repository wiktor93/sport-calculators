import React, {useEffect, useState} from 'react';
import Select from 'react-select';

import {runningRaceOptions} from '../../assets/data';
import Button from '../Button';
import Input from '../Input';
import Unit from '../Unit';
import styles from '../../styles/Calc.module.scss';

const TimeSegment = () => {
  const [paceMinutes, setPaceMinutes] = useState('');
  const [paceSeconds, setPaceSeconds] = useState('');
  const [kilometers, setKilometers] = useState('');
  const [meters, setMeters] = useState('');
  const [selected, setSelected] = useState('Select...');
  const [time, setTime] = useState(0);

  let hours = Math.floor(time / 3600),
    minutes = Math.floor((time / 60) % 60),
    seconds = Math.floor(time % 60);

  const renderTimeResult = () => {
    return time ? (
      <p>
        <span>{hours > 9 ? hours : `0${hours}`}</span>:
        <span>{minutes > 9 ? minutes : `0${minutes}`}</span>:
        <span>{seconds > 9 ? seconds : `0${seconds}`}</span>
      </p>
    ) : (
      <p>
        <span>--</span>:<span>--</span>:<span>--</span>
      </p>
    );
  };

  useEffect(() => {
    const speed = (1 / (+paceMinutes * 60 + +paceSeconds)) * 3600;
    const distance = +kilometers + +meters / 1000;
    const newTime = (distance / speed) * 3600;

    if (newTime !== time) setTime(newTime);
  }, [paceMinutes, paceSeconds, kilometers, meters, time]);

  return (
    <>
      {/* TIME SEGMENT CALCULATOR */}
      <section className={styles.calcWrap}>
        <h3>Time Segment Calculator</h3>
        <p className={styles.note}>
          With this calculator, you can check what is the minimum time that you
          should overcome selected distance (e.g. stadion loop).
        </p>
        <form>
          {/* Pace */}
          <div className={styles.inputGroup}>
            <label>Pace: </label>
            <Input
              name="minutes"
              value={paceMinutes}
              onChange={e => setPaceMinutes(e.target.value)}
            />
            <Unit>min</Unit>
            <Input
              name="seconds"
              value={paceSeconds}
              onChange={e => setPaceSeconds(e.target.value)}
            />
            <Unit>sec</Unit>
          </div>

          {/* Distance */}
          <div className={styles.inputGroup}>
            <label>Distance (type or select): </label>
            <Input
              name="kilometers"
              value={kilometers}
              onChange={e => {
                setKilometers(e.target.value);
                setSelected('Select...');
              }}
            />
            <Unit>km</Unit>
            <Input
              name="meters"
              value={meters}
              onChange={e => {
                setMeters(e.target.value);
                setSelected('Select...');
              }}
            />
            <Unit>m</Unit>
            <Select
              className={styles.select}
              options={runningRaceOptions}
              isSearchable={false}
              placeholder={selected}
              value={selected}
              onChange={e => {
                setKilometers(e.value);
                setMeters(e.m);
                setSelected(e.label);
              }}
            />
          </div>

          <div className={styles.resultsContainer}>
            <div>
              <h4>Time</h4>
              <div className={styles.result}>{renderTimeResult()}</div>
            </div>
          </div>

          <div className={styles.btnContainer}>
            <Button
              onClick={e => {
                e.preventDefault();
                setPaceMinutes('');
                setPaceSeconds('');
                setKilometers('');
                setMeters('');
                setSelected('Select...');
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

export default TimeSegment;
