import React from 'react';
import DicaPagina from './DicaPagina';
import EnviarBtn from './EnviarBtn';
import Input from './Input';
import styles from './input.module.css';
import stylesPrevia from './previa.module.css';
import Previa from './Previa';
import { Context } from './Context';

const BuscarFile = ({ ativo, placeholder }) => {
  const context = React.useContext(Context);

  return (
    <>
      <div ativo={ativo} className={styles.containerBuscarFile}>
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
        {context.loading ? (
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
              paddingRight: '48px',
              marginTop: '48px',
              position: 'absolute',
              left: '0px',
            }}
          >
            Prévia da imagem:
          </DicaPagina>
          {context.preview && <Previa imagem={context.preview} />}
        </div>
      )}
    </>
  );
};

export default BuscarFile;
