import React from 'react';
import styles from './enviarBtn.module.css';

const EnviarBtn = ({ handleSubmit, children, onSubmit, ...props }) => {
  return (
    <button
      onSubmit={onSubmit}
      onClick={handleSubmit}
      className={styles.btnEnviar}
      {...props}
    >
      {children}
    </button>
  );
};

export default EnviarBtn;
