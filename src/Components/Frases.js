import React from 'react';
import Button from './Button';
import DicaPagina from './DicaPagina';
import TituloPagina from './TituloPagina';
import stylesBtn from './procurar.module.css';
import styles from './frases.module.css';
import BuscarFrases from './BuscarFrases';
import { BuscarFrasesContext } from './ContextBuscarFrases';

const Frases = () => {
  const {
    anime,
    personagem,
    random,
    handleAnime,
    handlePersonagem,
    handleRandom,
    data,
    error,
  } = React.useContext(BuscarFrasesContext);

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
        Também temos mostrar frases de maneira aleátoria, basta clicar no
        “random”.
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
      {data &&
        data.map((item, index) => {
          return (
            <article className={styles.containerFrase} key={index}>
              <cite className={styles.nomeAnime}>
                {item.anime.length > 35
                  ? item.anime.split(' ').slice(0, -2).join(' ')
                  : item.anime}
              </cite>
              <p className={styles.frase}>"{item.quote}"</p>
              <p className={styles.personagem}>~{item.character}</p>
            </article>
          );
        })}
      {error && <p>Não encontramos esse anime :(</p>}
    </section>
  );
};

export default Frases;
