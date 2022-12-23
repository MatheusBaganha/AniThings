import React from 'react';
import styles from './populares.module.css';
import { PopularesContext } from '../Context/ContextPopulares';
import DicaPagina from './DicaPagina';

const AnimeMangaContainer = ({ ativo }) => {
  const { data, loading } = React.useContext(PopularesContext);

  return (
    <>
      {loading && <DicaPagina>Carregando...</DicaPagina>}
      {loading === false && (
        <section className={styles.containerGeral}>
          {data &&
            data.data.map((animeManga) => {
              const { attributes } = animeManga;

              const date = new Date(attributes.startDate);

              const info = {
                nome: attributes.canonicalTitle,
                image: attributes.posterImage.large,
                startDate: date.getFullYear(),
                episodes: attributes.episodeLength,
                score: (Number(attributes.averageRating) / 10).toFixed(2),
                nsfw: attributes.nsfw,
                youtubeVideo: `https://www.youtube.com/watch?v=${attributes.youtubeVideoId}`,
                synopsis: attributes.synopsis,
              };

              return (
                <article key={animeManga.id} className={styles.containerAnime}>
                  <div className={styles.containerFotoDoAnime}>
                    <img src={info.image} alt="capa do mangá" />
                  </div>
                  <div className={styles.containerInfos}>
                    <p>
                      <b>Nome:</b> <cite>{info.nome}</cite>
                    </p>
                    {info.episodes && (
                      <p>
                        <b>Episodios:</b>{' '}
                        {info.episodes >= 23 ? '+25' : info.episodes}
                      </p>
                    )}
                    {info.score && (
                      <p>
                        <b>Nota:</b> {info.score}
                      </p>
                    )}
                    {info.startDate && (
                      <p>
                        <b>Lançamento: </b> {info.startDate}
                      </p>
                    )}
                    {info.nsfw && (
                      <p>
                        <b>+18:</b> {info.nsfw ? 'Sim' : 'Não'}
                      </p>
                    )}

                    {animeManga.attributes.youtubeVideo && (
                      <p>
                        Trailer:{' '}
                        <a
                          href={info.youtubeVideo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Clique para assistir
                        </a>
                      </p>
                    )}
                    {info.synopsis && (
                      <p className={styles.sinopse}>
                        <b>Sinopse: </b>
                        {info.synopsis}
                      </p>
                    )}
                    {info.synopsis && (
                      <input
                        className={styles.readMore}
                        type="checkbox"
                        name="readMore"
                        id="readMore"
                      />
                    )}
                  </div>
                </article>
              );
            })}
        </section>
      )}
      ;
    </>
  );
};

export default AnimeMangaContainer;
