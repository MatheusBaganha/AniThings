import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { UPLOAD_IMAGE } from './api';

export const ContextEncontrado = React.createContext({});

export const EncontradoContext = ({ children }) => {
  const { request, data, loading, error } = useFetch();
  const imageAPI = data ? [data.result[0].image] : '';
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
    console.log(response);
    console.log(json);
    if (response.ok) {
      navigate(`/procurar/${json.result[0].anilist}`);
    }
  }
  return (
    <ContextEncontrado.Provider
      value={{
        data,
        loading,
        error,
        preview,
        imageAPI,
        handleUploadImage,
        handleFileChange,
      }}
    >
      {children}
    </ContextEncontrado.Provider>
  );
};
