import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { UPLOAD_IMAGE } from './api';
import EnviarBtn from './EnviarBtn';
import Input from './Input';
import styles from './input.module.css';
import Previa from './Previa';
const BuscarFile = ({ ativo, placeholder }) => {
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

  function handleChange({ target }) {
    if (!target.files || target.files.length === 0) {
      setSelectedImg(undefined);
      return;
    }

    setSelectedImg(target.files[0]);
  }

  // function onError() {
  //   setPreview('local da imagem de erro);
  // }
  const { request, data, loading, error } = useFetch();
  const imageAPI = data ? [data.result[0].image] : '';

  async function handleSubmit(e) {
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
    <>
      <div ativo={ativo} className={styles.containerBuscarFile}>
        <label className={styles.label}>
          <Input
            type="file"
            accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/webp"
            onChange={handleChange}
            name={'image'}
            required
          />
          {preview ? 'Imagem carregada' : placeholder}
        </label>
        {loading ? (
          <EnviarBtn disabled>ENVIANDO...</EnviarBtn>
        ) : (
          <EnviarBtn handleSubmit={handleSubmit}>ENVIAR</EnviarBtn>
        )}
      </div>
      {preview && <Previa imagem={preview} /*onError={onError}*/ />}
      {error ? <p>Ocorreu um erro. Tente novamente.</p> : ''}
      {/* {data ? <img src={imageAPI[0]} /> : ''} */}
    </>
  );
};

export default BuscarFile;
