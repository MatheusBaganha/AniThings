import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import useFetch from '../Hooks/useFetch';
// import { UPLOAD_IMAGE } from './api';
import { ContextEncontrado } from './EncontradoContext';
import EnviarBtn from './EnviarBtn';
import Input from './Input';
import styles from './input.module.css';
import Previa from './Previa';

const BuscarFile = ({ ativo, placeholder }) => {
  const context = React.useContext(ContextEncontrado);
  console.log(context);

  return (
    <>
      <div ativo={ativo} className={styles.containerBuscarFile}>
        <label className={styles.label}>
          <Input
            type="file"
            accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/webp"
            // onChange={handleChange}
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
        <Previa imagem={context.preview} /*onError={onError}*/ />
      )}
      {context.error ? <p>Ocorreu um erro. Tente novamente.</p> : ''}
    </>
  );
};

export default BuscarFile;
