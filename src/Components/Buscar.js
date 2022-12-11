import React from 'react';
import styles from './input.module.css';
import EnviarBtn from './EnviarBtn';
import Input from './Input';
import Previa from './Previa';
import { Context } from './Context';

const Buscar = ({ ativo, type, placeholder }) => {
  const context = React.useContext(Context);
  const [url, setUrl] = React.useState('');
  const [invalidURL, setInvalidURL] = React.useState(false);
  const [urlWrote, setUrlWrote] = React.useState('');

  function handleUrlChange({ target }) {
    setInvalidURL(false);
    setUrl(target.value);
  }

  function verifyURLonBlur() {
    setInvalidURL(false);
    const isURL =
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

    if (url.length > 0 && url.match(isURL)) {
      setUrlWrote(url);
    } else {
      setInvalidURL(true);
    }
  }

  return (
    <div ativo={ativo} className={styles.containerBuscar}>
      <Input
        type={type}
        placeholder={placeholder}
        onBlur={verifyURLonBlur}
        onChange={handleUrlChange}
        value={url}
        required
      />

      {context.loading ? (
        <EnviarBtn disabled>ENVIANDO...</EnviarBtn>
      ) : (
        <EnviarBtn
          handleSubmit={(e) => context.handleSearchByUrlImage(e, urlWrote)}
        >
          ENVIAR
        </EnviarBtn>
      )}

      {urlWrote && <Previa imagem={urlWrote} />}
      {invalidURL ? (
        <p style={{ marginTop: '36px' }}>Ocorreu um erro. URL inválida.</p>
      ) : (
        ''
      )}
    </div>
  );
};

export default Buscar;
