import React from 'react';
import styles from './dicaPagina.module.css';
import stylesAnime from './animation.module.css';

const DicaPagina = ({ children, ativo, ...props }) => {
  return (
    <p
      ativo={ativo}
      className={`${styles.dica} ${stylesAnime.animarContainerGeral}`}
      {...props}
    >
      {children}
    </p>
  );
};

export default DicaPagina;
