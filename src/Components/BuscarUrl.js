import React from 'react';
import styles from './input.module.css';
import stylesPrevia from './previa.module.css';
import EnviarBtn from './EnviarBtn';
import DicaPagina from './DicaPagina';
import Input from './Input';
import Previa from './Previa';
import { EncontrarAnimeContext } from '../Context/ContextEncontrarAnime';
import useWindowDimensions from '../Hooks/useWindowDimensions';

const Buscar = ({ ativo, type, placeholder }) => {
  const context = React.useContext(EncontrarAnimeContext);
  const [url, setUrl] = React.useState('');
  const [invalidURL, setInvalidURL] = React.useState(false);
  const [urlWrote, setUrlWrote] = React.useState('');
  const { width } = useWindowDimensions();

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
          style={
            width < 430
              ? { position: 'relative', top: '-2px' }
              : { position: 'static' }
          }
          handleSubmit={(e) => context.handleSearchByUrlImage(e, urlWrote)}
        >
          ENVIAR
        </EnviarBtn>
      )}

      {urlWrote && (
        <div className={stylesPrevia.containerPreviaUrl}>
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
          </DicaPagina>{' '}
          <Previa imagem={urlWrote} />
        </div>
      )}
      {invalidURL && <DicaPagina>URL inválida. Tente novamente.</DicaPagina>}
    </div>
  );
};

export default Buscar;
