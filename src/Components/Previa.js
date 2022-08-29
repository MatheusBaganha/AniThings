import React from 'react';
import styles from './previa.module.css';

const Previa = ({ imagem, onError, video }) => {
  if (imagem) {
    return (
      <div className={styles.imgContainer}>
        <img
          onError={onError}
          className={styles.img}
          src={imagem}
          alt="Prévia da imagem selecionada"
        />
      </div>
    );
  }
  if ((imagem === null || undefined) && video) {
    return (
      <div className={styles.imgContainer}>
        <video
          width="360"
          height="202"
          className={styles.img}
          autoPlay
          loop
          muted
          controls
          style={{ marginBottom: '32px' }}
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    );
  }
  return null;
};
export default Previa;
