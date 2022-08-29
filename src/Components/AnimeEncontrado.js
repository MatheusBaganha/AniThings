import React from 'react';
import styles from './animeEncontrado.module.css';
import Feedback from './Feedback';
import Previa from './Previa';
import { Context } from './Context';
import DicaPagina from './DicaPagina';

const AnimeEncontrado = () => {
  const context = React.useContext(Context);
  const percentage = (context.data.result[0].similarity * 100).toFixed(2) + '%';
  const animeName = context.data.result[0].anilist.title.english;

  return (
    <>
      <Feedback />
      <article className={styles.containerGeral}>
        <h2 className={styles.tituloEncontrado}>Resultado: </h2>
        <section className={styles.containerEncontrado}>
          {context.preview && (
            <div>
              <DicaPagina
                style={{
                  textAlign: 'start',
                  paddingRight: '0px',
                  marginTop: '0px',
                  marginBottom: '-28px',
                  display: 'block',
                }}
              >
                Sua imagem:
              </DicaPagina>
              <Previa imagem={context.preview} video={null} />
            </div>
          )}
          <span className={styles.linha}></span>
          {context.videoAPI && (
            <div className={styles.container}>
              <DicaPagina
                style={{
                  textAlign: 'start',
                  paddingRight: '0px',
                  marginTop: '0px',
                  marginBottom: '-28px',
                  display: 'block',
                }}
              >
                Encontramos:
              </DicaPagina>
              <Previa imagem={null} video={context.videoAPI} />
              <h2>
                <cite className={styles.nomeDoAnime}>{animeName}</cite>
              </h2>
              <p className={styles.similiaridade}>
                ~{percentage} de similiaridade
              </p>
            </div>
          )}
        </section>
      </article>
    </>
  );
};

export default AnimeEncontrado;
