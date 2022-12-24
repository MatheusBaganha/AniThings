import React from 'react';
import styles from './input.module.css';
import stylesAnime from './animation.module.css';

const Input = ({
  value,
  onChange,
  onBlur,
  onKeyDown,
  name,
  placeholder,
  ...props
}) => {
  return (
    <input
      className={`${styles.input} ${stylesAnime.animarInput}`}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      name={name}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;
