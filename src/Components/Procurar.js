import React from 'react';
import Buscar from './Buscar';
import BuscarFile from './BuscarFile';
import Button from './Button';
import DicaPagina from './DicaPagina';
import styles from './procurar.module.css';
import TituloPagina from './TituloPagina';

const Procurar = () => {
  const [ativo, setAtivo] = React.useState(true);

  React.useEffect(() => {
    return;
  }, [ativo]);

  function handleClick(e) {
    setAtivo((ativo) => !ativo);
  }

  return (
    <main className={styles.main}>
      <TituloPagina>
        Nos envie uma imagem contendo a cena do anime que procura
        <br />
        Iremos encontrar para você!
      </TituloPagina>
      {Procurar && ativo && (
        <DicaPagina>Coloque a URL da imagem no campo abaixo.</DicaPagina>
      )}
      {Procurar && !ativo && (
        <DicaPagina>Formatos suportados: jpeg | png | webp</DicaPagina>
      )}
      <form className={styles.form}>
        <div className={styles.containerButtons}>
          <Button ativo={ativo} handleClick={handleClick} disabled={ativo}>
            Link
          </Button>
          <Button ativo={!ativo} handleClick={handleClick} disabled={!ativo}>
            Upload
          </Button>
        </div>
        {Procurar && ativo && (
          <Buscar ativo={ativo} type="text" placeholder="URL da imagem" />
        )}
        {Procurar && !ativo && (
          <BuscarFile ativo={!ativo} placeholder="Upload da imagem" />
        )}
      </form>
    </main>
  );
};

export default Procurar;
