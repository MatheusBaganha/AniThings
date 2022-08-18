import React from 'react'
import styles from './dicaPagina.module.css';

const DicaPagina = ({children}) => {
  return (
    <p className={styles.dica}>{children}</p>
  )
}

export default DicaPagina