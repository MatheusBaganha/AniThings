import React from 'react';
import styles from './input.module.css';

const Input = ({ value, onChange, onBlur, onKeyUp, name, ...props }) => {
  return (
    <input
      className={styles.input}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onKeyUp={onKeyUp}
      name={name}
      {...props}
    />
  );
};

export default Input;
