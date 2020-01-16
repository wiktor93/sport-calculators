import React, {useState, useEffect} from 'react';

import Input from '../Input';
import Unit from '../Unit';
import Button from '../Button';
import styles from '../../styles/RunningCalc.module.scss';

const OneRepMax = () => {
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [maxRep, setMaxRep] = useState('');

  useEffect(() => {
    if (weight && reps) {
      const orm = Math.round(weight * (1 + reps / 30));
      setMaxRep(orm);
    }
  }, [weight, reps]);

  return (
    <section className={styles.calcWrap}>
      <h3>One Rep Max Calculator</h3>
      <p className={styles.note}>
        With this calculator, you can check what is your 1RM for any lift. One
        Rep Max is a maximum weight that you can lift for a single repetition
        for a given exercise.
      </p>
      <form>
        {/* Weight */}
        <div className={styles.inputGroup}>
          <label>Lifted weight: </label>
          <Input
            name="weight"
            value={weight}
            onChange={e => setWeight(e.target.value)}
          />
          <Unit>kg</Unit>
        </div>
        {/* Repetitions */}
        <div className={styles.inputGroup}>
          <label>Repetitions: </label>
          <Input
            name="repetitions"
            value={reps}
            onChange={e => setReps(e.target.value)}
          />
          <Unit>reps</Unit>
        </div>

        <div className={styles.resultsContainer}>
          <div>
            <h4>One Rep Max</h4>
            <div className={styles.result}>
              <p>
                <span>{maxRep ? maxRep : '-'} </span>[kg]
              </p>
            </div>
          </div>
        </div>

        <div className={styles.btnContainer}>
          <Button
            onClick={e => {
              e.preventDefault();
              setWeight('');
              setReps('');
              setMaxRep('');
            }}
          >
            Reset <i className="fas fa-undo-alt"></i>
          </Button>
        </div>
      </form>
    </section>
  );
};

export default OneRepMax;
