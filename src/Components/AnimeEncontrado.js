import React from 'react';
import styles from './animeEncontrado.module.css';
import Feedback from './Feedback';
import Previa from './Previa';
import { Context } from './Context';
import DicaPagina from './DicaPagina';

const AnimeEncontrado = () => {
  const context = React.useContext(Context);
  const percentage = (context.data.result[0].similarity * 100).toFixed(2) + '%';
  const animeName = context.data.result[0].anilist.title.romaji;
  const episode = context.data.result[0].episode;
  const conteudoAdulto = context.data.result[0].anilist.isAdult ? 'Sim' : 'Não';
  const minutoInicial = (context.data.result[0].from / 60)
    .toFixed(2)
    .replace('.', ':');
  const minutoFinal = (context.data.result[0].to / 60)
    .toFixed(2)
    .replace('.', ':');
  const outrosNomes = context.data.result[0].anilist.synonyms
    .slice(0, 4)
    .map((item) => {
      return ` ${item} |`;
    });

  return (
    <>
      <Feedback />
      <h2 className={styles.tituloEncontrado}>Resultado: </h2>
      <article className={styles.containerGeral}>
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
        {context.preview && (
          <section className={styles.containerEncontrado}>
            <DicaPagina
              style={{
                textAlign: 'start',
                paddingRight: '0px',
                marginTop: '0px',
                marginBottom: '22px',
                display: 'block',
              }}
            >
              Mais informações:
            </DicaPagina>
            <article className={styles.maisInfo}>
              <p>
                <b>Anime: </b>
                <cite>{animeName}</cite>
              </p>
              <p>
                <b>Episódio:</b> {episode}
              </p>
              <p>
                <b>Minuto: </b>
                {minutoInicial} ~ {minutoFinal}
              </p>
              <p>
                <b>Outros Nomes:</b> {outrosNomes}
              </p>
              <p>
                <b>Possui Conteúdo Adulto:</b> {conteudoAdulto}
              </p>
            </article>
          </section>
        )}
      </article>
    </>
  );
};

export default AnimeEncontrado;
