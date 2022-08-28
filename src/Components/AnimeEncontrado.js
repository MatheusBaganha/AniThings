import React from 'react';
import styles from './animeEncontrado.module.css';
import Feedback from './Feedback';
import Previa from './Previa';
import { ContextEncontrado } from './EncontradoContext';

const AnimeEncontrado = () => {
  const context = React.useContext(ContextEncontrado);

  return (
    <>
      <Feedback />
      <article className={styles.containerGeral}>
        <h2 className={styles.tituloEncontrado}>Resultado: </h2>
        <section className={styles.containerEncontrado}>
          <p>Sua imagem: </p>
          <Previa imagem={context.imageAPI} />
        </section>
      </article>
    </>
  );
};

export default AnimeEncontrado;
