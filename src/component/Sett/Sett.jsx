import React from 'react';
import styles from './Sett.module.css';
import Button from '../Button/Button';

function Sett({ startValue, setStartValue, maxValue, setMaxValue }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_numbers}>
        <label for="maxValue">
          max value
          <input
            className={styles.inpMaxValue}
            id="maxValue"
            type="number"
            value={maxValue}
            onChange={(event) => {
              setMaxValue(event.target.value);
            }}
          />
        </label>
        <label for="startValue">
          start value
          <input
            value={startValue}
            className={styles.inpStartValue}
            id="startValue"
            type="number"
            onChange={(event) => {
              setStartValue(event.target.value);
            }}
          />
        </label>
      </div>
      <div className={styles.wrapper_button}>
        <Button name={'set'} callBack={() => setStartValue(startValue)} />
      </div>
    </div>
  );
}

export default Sett;
