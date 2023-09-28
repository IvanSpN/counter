import React, { useState } from 'react';
import styles from './Display.module.css';
import Button from '../Button/Button';

function Display({ startValue }) {
  const [count, setCount] = useState(startValue);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_display}>{count}</div>
      <div className={styles.wrapper_button}>
        <Button
          name={'inc'}
          callBack={() => {
            setCount(count + 1);
          }}
        />
        <Button
          name={'reset'}
          callBack={() => {
            setCount(0);
          }}
        />
      </div>
    </div>
  );
}

export default Display;
