import React from 'react';
import DicaPagina from './DicaPagina';
import styles from './previa.module.css';

const Previa = ({ imagem, onError }) => {
  if (imagem) {
    return (
      <div className={styles.containerPrevia}>
        <DicaPagina
          style={{
            textAlign: 'start',
            paddingRight: '48px',
            marginTop: '48px',
          }}
        >
          Prévia da imagem:
        </DicaPagina>
        <div className={styles.imgContainer}>
          <img
            onError={onError}
            className={styles.img}
            src={imagem}
            alt="Prévia da imagem selecionada"
          />
        </div>
      </div>
    );
  }
  return null;
};

export default Previa;
