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
  const [naoEncontrado, setNaoEncontrado] = React.useState();
  const [page, setPage] = React.useState(0);

  const { request, data, loading, error, setData } = useFetch();

  React.useEffect(() => {
    setValue('');
  }, [anime, personagem, random]);

  function handleChange({ target }) {
    setNaoEncontrado(false);
    const animeOrCharacterName = target.value.trim();
    setValue(animeOrCharacterName);
  }

  function handleAnime(e) {
    e.preventDefault();
    setRandom(false);
    setPersonagem(false);
    setAnime(true);
  }

  function handleRandom(e) {
    e.preventDefault();
    setValue('');
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

  function anime404(response) {
    if (response && response.ok === false) {
      return true;
    }
  }

  async function requestsQuotes(page) {
    if (anime) {
      const { url } = FIND_QUOTE_BY_ANIME_NAME(value, page);
      const { response, json } = await request(url);
      if (anime404(response) || response === undefined || null) {
        setNaoEncontrado(true);
        return null;
      }

      return json;
    }

    if (personagem) {
      const { url } = FIND_QUOTE_BY_CHARACTER_NAME(value, page);
      const { response, json } = await request(url);
      if (anime404(response) || response === undefined || null) {
        setNaoEncontrado(true);
        return null;
      }

      return json;
    }

    if (random) {
      return null;
    }
  }

  async function handleSearchQuote(e) {
    if (e && (e.type === 'click' || e.type === 'keydown')) e.preventDefault();
    setNaoEncontrado(false);
    setPage(0);
    requestsQuotes(0);
    if (random) {
      const { url } = FIND_QUOTE_RANDOM();
      const { response, json } = await request(url);
      if (anime404(response) || response === undefined || null) {
        setNaoEncontrado(true);
        return null;
      }
      return json;
    }
  }

  function goTop() {
    window.scrollTo({
      top: 400,
      behavior: 'smooth',
    });
  }

  return (
    <BuscarFrasesContext.Provider
      value={{
        data,
        setData,
        loading,
        request,
        error,
        handleSearchQuote,
        naoEncontrado,
        anime,
        personagem,
        random,
        value,
        handleChange,
        handleAnime,
        handlePersonagem,
        handleRandom,
        requestsQuotes,
        page,
        setPage,
        goTop,
      }}
    >
      {<Outlet />}
    </BuscarFrasesContext.Provider>
  );
};
