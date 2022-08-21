import React from 'react';
import styles from './dicaPagina.module.css';

const DicaPagina = ({ children, ativo, ...props }) => {
  return (
    <p ativo={ativo} className={styles.dica} {...props}>
      {children}
    </p>
  );
};

export default DicaPagina;
