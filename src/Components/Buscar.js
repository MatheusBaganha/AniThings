import React from 'react';
import styles from './input.module.css';
import EnviarBtn from './EnviarBtn';
import Input from './Input';
import Previa from './Previa';

const Buscar = ({ ativo, type, placeholder }) => {
  const [url, setUrl] = React.useState('');
  const [urlWrote, setUrlWrote] = React.useState('');

  function handleChange({ target }) {
    if (target) {
      setUrl(target.value);
    }
  }

  function handleBlur() {
    setUrlWrote(url);
  }

  return (
    <div ativo={ativo} className={styles.containerBuscar}>
      <Input
        type={type}
        placeholder={placeholder}
        onBlur={handleBlur}
        onChange={handleChange}
        value={url}
        required
      />
      <EnviarBtn>ENVIAR</EnviarBtn>
      {urlWrote && <Previa imagem={urlWrote} />}
    </div>
  );
};

export default Buscar;
