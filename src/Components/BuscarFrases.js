import React from 'react';
import EnviarBtn from './EnviarBtn';
import stylesInput from './input.module.css';
import Input from './Input';
import { BuscarFrasesContext } from '../Context/ContextBuscarFrases';
import useWindowDimensions from '../Hooks/useWindowDimensions';

const BuscarFrases = ({ ativo, type, placeholder }) => {
  const { width } = useWindowDimensions();
  const { handleChange, value, loading, handleSearchQuote, random } =
    React.useContext(BuscarFrasesContext);

  function sendToApiByEnterButton(e) {
    if (value.length && e.key === 'Enter') {
      handleSearchQuote(e);
    }
  }

  return (
    <>
      <div ativo={ativo} className={stylesInput.containerBuscar}>
        <Input
          type={type}
          placeholder={placeholder}
          onKeyUp={sendToApiByEnterButton}
          onChange={handleChange}
          value={value}
          required
          disabled={random}
        />

        {loading ? (
          <EnviarBtn disabled>ENVIANDO...</EnviarBtn>
        ) : (
          <EnviarBtn
            style={
              width < 430
                ? { position: 'relative', top: '-2px' }
                : { position: 'static' }
            }
            handleSubmit={handleSearchQuote}
          >
            ENVIAR
          </EnviarBtn>
        )}
      </div>
    </>
  );
};

export default BuscarFrases;
