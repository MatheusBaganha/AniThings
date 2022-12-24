import React from 'react';
import { Outlet } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { GET_POPULAR_ANIME, GET_POPULAR_MANGA } from '../Components/api';

export const PopularesContext = React.createContext({});

export const ContextPopulares = () => {
  const { request, data, loading, error, setData } = useFetch();

  async function getPopularAnimeAtTheMoment() {
    const { url } = GET_POPULAR_ANIME();
    const { json } = await request(url);
    return json;
  }

  async function getPopularMangaAtTheMoment() {
    const { url } = GET_POPULAR_MANGA();
    const { json } = await request(url);
    return json;
  }

  return (
    <PopularesContext.Provider
      value={{
        data,
        request,
        loading,
        error,
        setData,
        getPopularAnimeAtTheMoment,
        getPopularMangaAtTheMoment,
      }}
    >
      {<Outlet />}
    </PopularesContext.Provider>
  );
};
