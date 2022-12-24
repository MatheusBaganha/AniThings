import React from 'react';
import Button from './Button';
import DicaPagina from './DicaPagina';
import TituloPagina from './TituloPagina';
import stylesBtn from './procurar.module.css';
import styles from './frases.module.css';
import stylesAnime from './animation.module.css';
import BuscarFrases from './BuscarFrases';
import { BuscarFrasesContext } from '../Context/ContextBuscarFrases';
import CopySvg from './CopySvg';
import { Head } from './Head';

const Frases = () => {
  const [mounted, setMounted] = React.useState(true);
  const {
    anime,
    personagem,
    random,
    handleAnime,
    handlePersonagem,
    handleRandom,
    data,
    loading,
    page,
    setPage,
    naoEncontrado,
    requestsQuotes,
    goTop,
  } = React.useContext(BuscarFrasesContext);

  React.useEffect(() => {
    if (mounted) {
      setMounted(false);
      return;
    }

    requestsQuotes(page);
    goTop();
  }, [page]);

  function previousButton() {
    if (page === 0) return;
    const newPage = page - 1;
    setPage(newPage);
  }

  function nextButton() {
    if (data && Array.isArray(data)) {
      const newPage = page + 1;
      setPage(newPage);
    }
    return null;
  }

  React.useEffect(() => {});

  return (
    <section
      style={{ marginTop: '-32px' }}
      className={stylesAnime.animarContainerGeral}
    >
      <Head
        title={'Frases'}
        description={
          'Aqui você poderá gerar diversas frases dos seus animes ou personagens favoritos! Também é possível gerar as frases de forma aleatória, além disso, é possível copiar elas já formatadas!'
        }
      />
      <TituloPagina>
        Escreva o nome do anime ou personagem para ler suas frases mais
        impactantes!{' '}
      </TituloPagina>
      {anime && (
        <DicaPagina
          style={{
            paddingRight: '12px',
          }}
        >
          Escreva o nome do anime para ler as frases.
        </DicaPagina>
      )}
      {personagem && (
        <DicaPagina
          style={{
            paddingRight: '12px',
          }}
        >
          Escreva o nome do personagem para ler suas frases.
        </DicaPagina>
      )}
      {random && (
        <DicaPagina
          style={{
            paddingRight: '12px',
          }}
        >
          Para frases aleatórias, clique em “enviar”.
        </DicaPagina>
      )}
      <form>
        <div
          className={`${stylesBtn.containerButtons} ${styles.frasesButtons}`}
        >
          <Button
            buttonFrases="true"
            ativo={anime ? 'true' : false}
            handleClick={handleAnime}
          >
            Anime
          </Button>
          <Button
            buttonFrases="true"
            ativo={personagem ? 'true' : false}
            handleClick={handlePersonagem}
          >
            Personagem
          </Button>
          <Button
            buttonFrases="true"
            ativo={random && 'true'}
            handleClick={handleRandom}
          >
            Random
          </Button>
        </div>
        {anime && <BuscarFrases placeholder="Anime | Personagem" />}

        {personagem && <BuscarFrases placeholder="Anime | Personagem" />}

        {random && (
          <BuscarFrases placeholder={'Enviar para frases aleatórias'} />
        )}
      </form>
      <ul>
        {data &&
          Array.isArray(data) &&
          data.map((item) => {
            return (
              <li
                key={item.quote}
                className={`${styles.containerFrase} ${styles.animateQuote}`}
              >
                <cite className={styles.nomeAnime}>
                  {item.anime.length > 35
                    ? item.anime.split(' ').slice(0, -2).join(' ')
                    : item.anime}
                </cite>
                <p className={styles.frase}>"{item.quote}"</p>
                <div className={styles.containerPersonagemEcopy}>
                  <p className={styles.personagem}>~{item.character}</p>
                  <CopySvg />
                </div>
              </li>
            );
          })}
      </ul>

      {random === false && data && Array.isArray(data) && (
        <div
          className={`${stylesBtn.containerButtons} ${styles.frasesButtons}`}
        >
          <Button paginacao="true" onClick={previousButton}>
            Anterior
          </Button>
          <Button paginacao="true" onClick={nextButton}>
            Próximo
          </Button>
        </div>
      )}
      {random && data && Array.isArray(data) && (
        <svg
          className={styles.svgArrowTopRandom + ' bi bi-arrow-up-circle-fill'}
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="#7CCC81"
          viewBox="0 0 16 16"
          onClick={goTop}
        >
          <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
        </svg>
      )}

      {loading && <DicaPagina>Carregando...</DicaPagina>}
      {naoEncontrado && (
        <DicaPagina
          style={{ paddingRight: '8px', paddingLeft: '8px', lineHeight: 1.7 }}
        >
          Nada por aqui :( <br /> Três coisas podem ter ocorrido: <br />
          <br /> 1 - Acabaram as frases desse anime/personagem. <br /> 2 - Não
          existe nenhuma frase com esse anime/personagem na API. <br /> 3 - Você
          fez requisições demais. Por favor, aguarde 1 hora e tente novamente.
        </DicaPagina>
      )}
      {data && data.error && (
        <DicaPagina>Você chegou ao fim da pagina.</DicaPagina>
      )}
    </section>
  );
};

export default Frases;
