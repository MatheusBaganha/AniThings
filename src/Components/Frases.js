import React from 'react';
import Button from './Button';
import DicaPagina from './DicaPagina';
import TituloPagina from './TituloPagina';
import stylesBtn from './procurar.module.css';
import styles from './frases.module.css';
import BuscarFrases from './BuscarFrases';
import { BuscarFrasesContext } from '../Context/ContextBuscarFrases';
import CopySvg from './CopySvg';

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

    goTop();
    requestsQuotes(page);
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

  return (
    <section>
      <TituloPagina>
        Escreva o nome do anime ou personagem para ler suas frases mais
        impactantes!{' '}
      </TituloPagina>
      <DicaPagina
        style={{
          paddingRight: '12px',
        }}
      >
        Para mostrar frases de maneira aleátoria, basta clicar no “random”.
      </DicaPagina>
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
        <BuscarFrases
          placeholder={
            random ? 'Enviar para frases aleatórias' : 'Anime | Personagem'
          }
        />
      </form>
      <ul>
        {data &&
          Array.isArray(data) &&
          data.map((item, index) => {
            return (
              <li key={index} className={styles.containerFrase}>
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
