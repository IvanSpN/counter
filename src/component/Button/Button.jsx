import React from 'react';
import styles from './Button.module.css';

function Button({ name, callBack }) {
  return (
    <div>
      <button className={styles.button} onClick={callBack}>
        {name}
      </button>
    </div>
  );
}

export default Button;
