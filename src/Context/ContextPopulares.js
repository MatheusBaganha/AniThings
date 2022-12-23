import React from 'react';
import { Outlet } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { GET_POPULAR_ANIME, GET_POPULAR_MANGA } from '../Components/api';

export const PopularesContext = React.createContext({});

export const ContextPopulares = () => {
  const { request, data, loading, error, setData } = useFetch();

  async function getPopularAnimeAtTheMoment() {
    const { url } = GET_POPULAR_ANIME();
    const { response, json } = await request(url);
    console.log(json);
  }

  async function getPopularMangaAtTheMoment() {
    const { url } = GET_POPULAR_MANGA();
    const { response, json } = await request(url);
    console.log(json);
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
