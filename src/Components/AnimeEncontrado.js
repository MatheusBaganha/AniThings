import React from 'react';
import styles from './animeEncontrado.module.css';
import stylesAnime from './animation.module.css';
import Feedback from './Feedback';
import Previa from './Previa';
import { EncontrarAnimeContext } from '../Context/ContextEncontrarAnime';
import DicaPagina from './DicaPagina';
import { useNavigate } from 'react-router-dom';

const AnimeEncontrado = () => {
  const context = React.useContext(EncontrarAnimeContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (context.data) {
      return;
    } else {
      navigate('/');
    }
  });

  if (context.data) {
    const percentage =
      (context.data.result[0].similarity * 100).toFixed(2) + '%';
    const animeName = context.data.result[0].anilist.title.romaji;
    const episode = context.data.result[0].episode;
    const conteudoAdulto = context.data.result[0].anilist.isAdult
      ? 'Sim'
      : 'Não';
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
        <article
          className={`${styles.containerGeral} ${stylesAnime.animarContainerGeral}`}
        >
          <section className={styles.containerEncontrado}>
            {context.data && (
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
          {context.data && (
            <section className={styles.containerEncontrado}>
              <DicaPagina
                style={{
                  textAlign: 'start',
                  paddingRight: '0px',
                  margin: '0 0 22px 0',
                  display: 'block',
                  fontSize: '0.9rem',
                }}
              >
                Mais informações:
              </DicaPagina>
              <article className={styles.maisInfo}>
                <span>
                  <b>Anime: </b>
                  <cite>{animeName ? animeName : 'Não encontrado'}</cite>
                </span>
                <span>
                  <b>Episódio:</b>{' '}
                  {episode
                    ? episode
                    : 'Não encontrado. Talvez essa cena se passa em algum filme'}
                </span>

                <span>
                  <b>Minuto: </b>
                  {minutoInicial} ~ {minutoFinal}
                </span>
                <span>
                  <b>Outros Nomes:</b> {outrosNomes}
                </span>
                <span>
                  <b>Possui Conteúdo Adulto:</b> {conteudoAdulto}
                </span>
              </article>
            </section>
          )}
        </article>
      </>
    );
  }
};

export default AnimeEncontrado;
