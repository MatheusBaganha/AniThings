import React from 'react';
import Buscar from './BuscarUrl';
import BuscarFile from './BuscarFile';
import Button from './Button';
import DicaPagina from './DicaPagina';
import styles from './procurar.module.css';
import TituloPagina from './TituloPagina';

const Procurar = () => {
  const [ativo, setAtivo] = React.useState(true);

  function handleClick() {
    setAtivo((ativo) => !ativo);
  }

  return (
    <main>
      <TituloPagina>
        Nos envie uma imagem contendo a cena do anime que procura
        <br />
        Iremos encontrar para você!
      </TituloPagina>
      {Procurar && !ativo && (
        <DicaPagina
          style={{
            paddingRight: '12px',
            width: 'max-content',
          }}
        >
          Coloque a URL da imagem no campo abaixo.
        </DicaPagina>
      )}
      {Procurar && ativo && (
        <DicaPagina
          style={{
            paddingRight: '12px',
            width: 'max-content',
          }}
        >
          Formatos suportados: jpeg | png | webp | gif
        </DicaPagina>
      )}
      <form>
        <div className={styles.containerButtons}>
          <Button
            ativo={ativo && 'true'}
            handleClick={handleClick}
            disabled={ativo}
          >
            Upload
          </Button>
          <Button
            ativo={!ativo && 'true'}
            handleClick={handleClick}
            disabled={!ativo}
          >
            Link
          </Button>
        </div>
        {Procurar && ativo && (
          <BuscarFile ativo={ativo && 'true'} placeholder="Upload da imagem" />
        )}
        {Procurar && !ativo && (
          <Buscar
            ativo={!ativo && 'true'}
            type="text"
            placeholder="URL da imagem"
          />
        )}
      </form>
    </main>
  );
};

export default Procurar;
