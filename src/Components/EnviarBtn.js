import React from 'react';
import styles from './enviarBtn.module.css';

const EnviarBtn = ({ handleSubmit, children, ...props }) => {
  return (
    <button onClick={handleSubmit} className={styles.btnEnviar} {...props}>
      {children}
    </button>
  );
};

export default EnviarBtn;
