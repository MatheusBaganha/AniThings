import React from 'react';
import EnviarBtn from './EnviarBtn';
import Input from './Input';
import styles from './input.module.css';
import Previa from './Previa';

const BuscarFile = ({ ativo, placeholder }) => {
  const [selectedImg, setSelectedImg] = React.useState();
  const [preview, setPreview] = React.useState();

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
  return (
    <>
      <div ativo={ativo} className={styles.containerBuscarFile}>
        <label className={styles.label}>
          <Input
            type="file"
            accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/webp"
            onChange={handleChange}
            required
          />
          {preview ? 'Imagem carregada' : placeholder}
        </label>
        <EnviarBtn>ENVIAR</EnviarBtn>
      </div>
      {preview && <Previa imagem={preview} /*onError={onError}*/ />}
    </>
  );
};

export default BuscarFile;
