import React from 'react';
import styles from './tituloPagina.module.css';

const TituloPagina = ({ children }) => {
  return <h1 className={styles.titulo}>{children}</h1>;
};

export default TituloPagina;
