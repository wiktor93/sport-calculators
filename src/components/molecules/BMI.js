import React, {useState, useEffect} from 'react';

import Input from '../atoms/Input';
import Unit from '../atoms/Unit';
import Button from '../atoms/Button';
import styles from '../../styles/Calc.module.scss';

const BMI = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState('');

  useEffect(() => {
    if (height & weight) {
      const bmi = weight / (height / 100) ** 2;
      setBMI(bmi.toFixed(2));
    }
  }, [height, weight]);

  return (
    <section className={styles.calcWrap}>
      <h3>Body Mass Index (BMI) Calculator</h3>
      <p className={styles.note}>
        With this calculator, you can easily calculate your body mass index. The
        number show if your current weight is okay or if you have to loose some
        weight. Please check BMI values range blow:
        <ul>
          <li>Underweight = less than 18.5</li>
          <li>Normal weight = 18.5 - 24.9</li>
          <li>Overweight = 25 - 29.9</li>
          <li>Obesity = 30 - 35</li>
          <li>Severe obesity = 35 and more</li>
        </ul>
      </p>
      <form>
        {/* Height */}
        <div className={styles.inputGroup}>
          <label>Height: </label>
          <Input
            name="height"
            value={height}
            onChange={e => setHeight(e.target.value)}
          />
          <Unit>cm</Unit>
        </div>
        {/* Weight */}
        <div className={styles.inputGroup}>
          <label>Weight: </label>
          <Input
            name="weight"
            value={weight}
            onChange={e => setWeight(e.target.value)}
          />
          <Unit>kg</Unit>
        </div>

        <div className={styles.resultsContainer}>
          <div>
            <h4>Body Mass Index</h4>
            <div className={styles.result}>
              <p>
                <span>{bmi ? bmi : '-'}</span>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.btnContainer}>
          <Button
            onClick={e => {
              e.preventDefault();
              setHeight('');
              setWeight('');
              setBMI('');
            }}
          >
            Reset <i className="fas fa-undo-alt"></i>
          </Button>
        </div>
      </form>
    </section>
  );
};

export default BMI;
