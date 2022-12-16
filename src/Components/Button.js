import React from 'react';
import styles from './button.module.css';

const Button = ({ children, handleClick, ativo, buttonFrases, ...props }) => {
  return (
    <button
      className={`${styles.button} ${ativo ? styles.ativo : ''} ${
        buttonFrases ? styles.buttonFrases : ''
      }`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
