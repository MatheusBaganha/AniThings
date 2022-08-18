import React from 'react'
import styles from './button.module.css';

const Button = ({children, handleClick, ...props}) => {

  return (
    <button className={styles.button} onClick={handleClick} {...props}>{children}</button>
  )
}

export default Button