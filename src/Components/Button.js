import React from 'react';
import styles from './button.module.css';

const Button = ({ children, handleClick, ativo, ...props }) => {
  return (
    <button
      className={`${styles.button} ${ativo ? styles.ativo : ''}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
