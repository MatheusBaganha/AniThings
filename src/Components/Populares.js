import React from 'react';
import TituloPagina from './TituloPagina';
import DicaPagina from './DicaPagina';
import Button from './Button';
import stylesBtn from './procurar.module.css';
import { PopularesContext } from '../Context/ContextPopulares';
import AnimeMangaContainer from './AnimeMangaContainer';

const Manga = () => {
  const [ativo, setAtivo] = React.useState(true);
  const { getPopularAnimeAtTheMoment, getPopularMangaAtTheMoment, data } =
    React.useContext(PopularesContext);

  React.useEffect(() => {
    getPopularAnimeAtTheMoment();
  }, []);

  function handleClickAnime() {
    setAtivo((ativo) => !ativo);
    getPopularAnimeAtTheMoment();
  }

  function handleClickManga() {
    setAtivo((ativo) => !ativo);
    getPopularMangaAtTheMoment();
  }

  return (
    <section>
      <TituloPagina>
        Veja os animes/mangás mais populares do momento por aqui.
      </TituloPagina>
      <DicaPagina
        style={{
          paddingRight: '12px',
        }}
      >
        {ativo
          ? 'Abaixo estão os animes mais populares do momento.'
          : 'Abaixo estão os mangás mais populares do momento.'}
      </DicaPagina>
      <div
        style={{ marginBottom: '36px' }}
        className={stylesBtn.containerButtons}
      >
        <Button handleClick={handleClickAnime} ativo={ativo && 'true'}>
          Animes
        </Button>
        <Button handleClick={handleClickManga} ativo={!ativo && 'true'}>
          Mangás
        </Button>
      </div>
      {data && <AnimeMangaContainer ativo={ativo ? 'true' : null} />}
    </section>
  );
};

export default Manga;
