import React from 'react';
import EnviarBtn from './EnviarBtn';
import Input from './Input';
import styles from './input.module.css';

const BuscarFile = ({ ativo, placeholder }) => {
  return (
    <div ativo={ativo} className={styles.containerBuscarFile}>
      <label className={styles.label}>
        <Input type="file" required />
        {placeholder}
      </label>
      <EnviarBtn>ENVIAR</EnviarBtn>
    </div>
  );
};

export default BuscarFile;
