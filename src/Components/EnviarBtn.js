import React from 'react';
import styles from './enviarBtn.module.css';

const EnviarBtn = ({ children }) => {
  return <button className={styles.btnEnviar}>{children}</button>;
};

export default EnviarBtn;
