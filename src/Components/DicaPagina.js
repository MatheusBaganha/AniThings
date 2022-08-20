import React from 'react';
import styles from './dicaPagina.module.css';

const DicaPagina = ({ children, ativo }) => {
  return (
    <p ativo={ativo} className={styles.dica}>
      {children}
    </p>
  );
};

export default DicaPagina;
