import React from 'react';
import Button from './Button';
import styles from './feedback.module.css';
import stylesAnime from './animation.module.css';
import { useNavigate } from 'react-router-dom';
import { EncontrarAnimeContext } from '../Context/ContextEncontrarAnime';

const Feedback = () => {
  const [animeFound, setAnimeFound] = React.useState(null);
  const context = React.useContext(EncontrarAnimeContext);
  const navigate = useNavigate();

  function handleClick({ target }) {
    setAnimeFound(null);
    if (target.innerText === 'Sim') {
      setAnimeFound(true);
    }
    if (target.innerText === 'Não') {
      setAnimeFound(false);
    }
  }

  function goBack() {
    context.cleanStates();
    navigate('/');
  }

  return (
    <div
      className={`${styles.containerFeedback} ${stylesAnime.animarContainerGeral}`}
    >
      <h4 className={styles.feedbackPergunta}>Encontrou o anime que queria?</h4>
      {animeFound === null && (
        <div className={styles.containerBtns}>
          <Button handleClick={handleClick} ativo={'true'}>
            Sim
          </Button>
          <Button handleClick={handleClick}>Não</Button>
        </div>
      )}
      {animeFound && (
        <p
          className={`${styles.feedback} ${styles.feedbackPositivo} ${stylesAnime.animarContainerGeral}`}
        >
          Obrigado por utilizar o AniThings :)
        </p>
      )}
      {animeFound === false && (
        <p
          className={`${styles.feedback} ${styles.feedbackNegativo} ${stylesAnime.animarContainerGeral}`}
        >
          Que pena. Tente novamente usando uma imagem de melhor qualidade
          <b className={`${styles.feedbackNegativo}`} onClick={goBack}>
            {' '}
            clicando aqui.
          </b>
        </p>
      )}
    </div>
  );
};

export default Feedback;
