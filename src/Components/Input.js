import React from 'react';
import styles from './input.module.css';

const Input = ({ value, onChange, onBlur, ...props }) => {
  return (
    <input
      className={styles.input}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      {...props}
    />
  );
};

export default Input;
