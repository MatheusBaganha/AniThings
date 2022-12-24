import React from 'react';
import DicaPagina from './DicaPagina';
import EnviarBtn from './EnviarBtn';
import Input from './Input';
import styles from './input.module.css';
import stylesPrevia from './previa.module.css';
import stylesAnime from './animation.module.css';
import Previa from './Previa';
import { EncontrarAnimeContext } from '../Context/ContextEncontrarAnime';

const BuscarFile = ({ ativo, placeholder }) => {
  const context = React.useContext(EncontrarAnimeContext);

  return (
    <>
      <div
        ativo={ativo}
        className={`${styles.containerBuscarFile} ${stylesAnime.animarInput}`}
      >
        <label className={styles.label}>
          <Input
            type="file"
            accept="image/gif, image/jpeg, image/png, image/webp"
            onChange={context.handleFileChange}
            name={'image'}
            required
          />
          {context.preview ? 'Imagem carregada' : placeholder}
        </label>
        {context.preview && context.loading ? (
          <EnviarBtn disabled>ENVIANDO...</EnviarBtn>
        ) : (
          <EnviarBtn handleSubmit={context.handleUploadImage}>ENVIAR</EnviarBtn>
        )}
      </div>
      {context.preview && (
        <div className={stylesPrevia.containerPrevia}>
          <DicaPagina
            style={{
              textAlign: 'start',
              paddingRight: '18px',
              marginTop: '48px',
              margin: '48px 0 0 0',
              width: 'max-content',
            }}
          >
            Prévia da imagem:
          </DicaPagina>
          {context.preview && (
            <Previa imagem={context.preview} style={{ marginRight: 0 }} />
          )}
        </div>
      )}
    </>
  );
};

export default BuscarFile;
