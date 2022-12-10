import React from 'react';
import Button from './Button';
import styles from './feedback.module.css';
import { useNavigate } from 'react-router-dom';
import { Context } from './Context';

const Feedback = () => {
  const [animeFound, setAnimeFound] = React.useState(null);
  const context = React.useContext(Context);
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
    navigate('/procurar');
  }

  return (
    <div className={styles.containerFeedback}>
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
        <p className={`${styles.feedback} ${styles.feedbackPositivo}`}>
          Obrigado por utilizar o AniThings :)
        </p>
      )}
      {animeFound === false && (
        <p className={`${styles.feedback} ${styles.feedbackNegativo}`}>
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
