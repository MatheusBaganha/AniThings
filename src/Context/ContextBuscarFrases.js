import React from 'react';
import { Outlet } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import {
  FIND_QUOTE_BY_ANIME_NAME,
  FIND_QUOTE_BY_CHARACTER_NAME,
  FIND_QUOTE_RANDOM,
} from '../Components/api';

export const BuscarFrasesContext = React.createContext({});

export const ContextBuscarFrases = () => {
  const [anime, setAnime] = React.useState(true);
  const [personagem, setPersonagem] = React.useState(false);
  const [random, setRandom] = React.useState(false);
  const [value, setValue] = React.useState('');

  const { request, data, loading, error } = useFetch();

  function handleChange({ target }) {
    setValue(target.value);
  }

  function handleAnime(e) {
    e.preventDefault();
    setRandom(false);
    setPersonagem(false);
    setAnime(true);
  }

  function handleRandom(e) {
    e.preventDefault();
    setPersonagem(false);
    setAnime(false);
    setRandom(true);
  }

  function handlePersonagem(e) {
    e.preventDefault();
    setRandom(false);
    setAnime(false);
    setPersonagem(true);
  }

  async function handleSearchQuote(e) {
    console.log(e);
    // Atualiza sozinho estado e volta pro Anime quando usa o enter
    if (e.type === 'click') e.preventDefault();
    if (anime) {
      const { url } = FIND_QUOTE_BY_ANIME_NAME(value);
      const { response, json } = await request(url);
      console.log(response);
      console.log(json);
    }
    if (personagem) {
      const { url } = FIND_QUOTE_BY_CHARACTER_NAME(value);
      const { response, json } = await request(url);
      console.log(response);
      console.log(json);
    }
    if (random) {
      const { url } = FIND_QUOTE_RANDOM();
      const { response, json } = await request(url);
      console.log(response);
      console.log(json);
    }
  }

  return (
    <BuscarFrasesContext.Provider
      value={{
        data,
        loading,
        request,
        error,
        handleSearchQuote,
        anime,
        personagem,
        random,
        value,
        handleChange,
        handleAnime,
        handlePersonagem,
        handleRandom,
      }}
    >
      {<Outlet />}
    </BuscarFrasesContext.Provider>
  );
};
