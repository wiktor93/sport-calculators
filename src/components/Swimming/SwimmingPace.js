import React, {useState, useEffect} from 'react';
import Select from 'react-select';

import {swimmingRaceOptions} from '../../assets/data';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Unit from '../../components/Unit';
import styles from '../../styles/Calc.module.scss';

const SwimmingPace = () => {
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState({minutes: '', seconds: ''});
  const [pace, setPace] = useState({minutes: '', seconds: ''});
  const [selected, setSelected] = useState('Select...');

  useEffect(() => {
    if (distance && time) {
      const totalTime = +time.minutes * 60 + +time.seconds;
      const newPace = (totalTime * 100) / +distance;
      setPace({
        minutes: Math.floor(newPace / 60),
        seconds: Math.floor(newPace % 60)
      });
    }
  }, [time, distance, pace.minutes, pace.seconds]);

  const renderPaceResult = () => {
    return pace.minutes || pace.seconds ? (
      <p>
        <span>{pace.minutes}</span>:
        <span>{pace.seconds < 10 ? `0${pace.seconds}` : pace.seconds}</span>{' '}
        /100m
      </p>
    ) : (
      <p>
        <span>--</span>:<span>--</span> /100m
      </p>
    );
  };

  return (
    <>
      <section className={styles.calcWrap}>
        <h3>Swimming Pace Calculator</h3>
        <p className={styles.note}>
          With this calculator, you can check what is the minimum average pace
          to achieve your goal.
        </p>
        <form>
          {/* Distance */}
          <div className={styles.inputGroup}>
            <label>Distance (type or select): </label>
            <Input
              name="meters"
              value={distance}
              onChange={e => {
                setDistance(e.target.value);
                setSelected('Select...');
              }}
            />
            <Unit>m</Unit>
            <Select
              className={styles.select}
              options={swimmingRaceOptions}
              isSearchable={false}
              placeholder={selected}
              value={selected}
              onChange={e => {
                setSelected(e.label);
                setDistance(e.value);
              }}
            />
          </div>

          {/* Time */}
          <div className={styles.inputGroup}>
            <label>Time (your planned result): </label>
            <Input
              name="minutes"
              value={time.minutes}
              onChange={e => setTime({...time, minutes: e.target.value})}
            />
            <Unit>min</Unit>
            <Input
              name="seconds"
              value={time.seconds}
              onChange={e => setTime({...time, seconds: e.target.value})}
            />
            <Unit>sec</Unit>
          </div>

          <div className={styles.resultsContainer}>
            <div>
              <h4>Pace</h4>
              <div className={styles.result}>{renderPaceResult()}</div>
            </div>
          </div>

          <div className={styles.btnContainer}>
            <Button
              onClick={e => {
                e.preventDefault();
                setDistance('');
                setTime({minutes: '', seconds: ''});
                setPace({minutes: '--', seconds: '--'});
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

export default SwimmingPace;
