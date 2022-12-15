import React from 'react';
import styles from './previa.module.css';

const Previa = ({ imagem, onError, video, ...props }) => {
  if (imagem) {
    return (
      <div className={styles.imgContainer} {...props}>
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
