import React from 'react';
import styles from './populares.module.css';
import stylesAnime from './animation.module.css';
import { PopularesContext } from '../Context/ContextPopulares';

const AnimeMangaContainer = ({ ativo }) => {
  const { data } = React.useContext(PopularesContext);

  return (
    <>
      {data && (
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
                youtubeVideo: attributes.youtubeVideoId,
                synopsis: attributes.synopsis,
              };

              return (
                <article
                  key={animeManga.id}
                  className={`${styles.containerAnime} ${stylesAnime.animarContainerGeral}`}
                >
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

                    {info.youtubeVideo && (
                      <p>
                        Trailer:{' '}
                        <a
                          className={styles.link}
                          href={`https://www.youtube.com/watch?v=${info.youtubeVideo}`}
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
