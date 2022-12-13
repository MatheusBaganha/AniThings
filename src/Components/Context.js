import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { SEARCH_IMAGE_BY_URL, UPLOAD_IMAGE } from './api';

export const Context = React.createContext({});

export const AppContext = ({ children }) => {
  const { request, data, loading, error } = useFetch();
  const videoAPI = data ? [data.result[0].video] + '&size=l' : '';
  const [selectedImg, setSelectedImg] = React.useState();
  const [preview, setPreview] = React.useState();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!selectedImg) {
      setPreview(undefined);
      return;
    }

    const imgURL = URL.createObjectURL(selectedImg);
    setPreview(imgURL);
    return () => {
      URL.revokeObjectURL(imgURL);
    };
  }, [selectedImg]);

  function handleFileChange({ target }) {
    if (!target.files || target.files.length === 0) {
      setSelectedImg(undefined);
      return;
    }

    setSelectedImg(target.files[0]);
  }

  async function handleUploadImage(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', selectedImg);
    const { url, options } = UPLOAD_IMAGE(formData);
    const { response, json } = await request(url, options);

    if (response.ok) {
      navigate(`/animeEncontrado`);
    }
  }

  async function handleSearchByUrlImage(e, urlImage) {
    e.preventDefault();
    setPreview(urlImage);
    const { url } = SEARCH_IMAGE_BY_URL(urlImage);
    const { response, json } = await request(url);

    if (response.ok) {
      navigate(`/animeEncontrado`);
    }
  }

  function cleanStates() {
    setPreview(null);
    setSelectedImg(null);
  }

  return (
    <Context.Provider
      value={{
        data,
        loading,
        error,
        preview,
        videoAPI,
        handleSearchByUrlImage,
        handleUploadImage,
        handleFileChange,
        cleanStates,
      }}
    >
      {children}
    </Context.Provider>
  );
};
