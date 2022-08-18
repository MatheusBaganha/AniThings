import React from 'react'
import styles from './buscar.module.css';

const Buscar = ({type, placeholder}) => {
  return (
    <div className={styles.containerBuscar}>
      <input className={styles.inputUrl} type={type} placeholder={placeholder}/>
      <button className={styles.btnEnviar}>ENVIAR</button>
    </div>
  )
}

export default Buscar