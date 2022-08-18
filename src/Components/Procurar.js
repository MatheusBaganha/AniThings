import React from 'react'
import Buscar from './Buscar';
import Button from './Button';
import DicaPagina from './DicaPagina';
import styles from './procurar.module.css';
import TituloPagina from './TituloPagina';

const Procurar = () => {
  // const [ativo, setAtivo] = React.useState(true);

  return (
    <main className={styles.main}>
      <TituloPagina>Nos envie uma imagem contendo a cena do anime que procura<br/>Iremos encontrar para você!</TituloPagina>
      <DicaPagina>Formatos suportados: jpeg | png | webp</DicaPagina>
      <div className={styles.containerButtons}>
        <Button>Link</Button>
        <Button>Upload</Button>
      </div>
      <Buscar type='text' placeholder='URL da imagem'/>
    </main>
  )
}

export default Procurar