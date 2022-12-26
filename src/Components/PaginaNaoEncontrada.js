import React from 'react';
import DicaPagina from './DicaPagina';
import { Link, useNavigate } from 'react-router-dom';
import styles from './paginaNaoEncontrada.module.css';

const PaginaNaoEncontrada = () => {
  // const navigate = useNavigate();
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     navigate('/');
  //   }, 4000);
  // }, [navigate]);

  return (
    <>
      <div className={styles.container404}>
        <h2 className={styles.statusError}>404.</h2>
        <h3 className={styles.naoExiste}>Essa página não existe.</h3>
      </div>
      <DicaPagina
        style={{
          margin: '-36px auto 198px auto',
          fontSize: '1.1rem',
          width: 'max-content',
        }}
      >
        <b className={styles.link}>
          <Link to="/">Clique Aqui</Link>
        </b>{' '}
        para voltar a tela inicial.
      </DicaPagina>
    </>
  );
};

export default PaginaNaoEncontrada;
