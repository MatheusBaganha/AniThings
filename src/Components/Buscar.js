import React from 'react';
import styles from './input.module.css';
import EnviarBtn from './EnviarBtn';
import Input from './Input';

const Buscar = ({ ativo, type, placeholder }) => {
  return (
    <div ativo={ativo} className={styles.containerBuscar}>
      <Input type={type} placeholder={placeholder} required />
      <EnviarBtn>ENVIAR</EnviarBtn>
    </div>
  );
};

export default Buscar;
