import React from 'react'
import styles from './logo.module.css';
import { ReactComponent as LogoSvg } from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <span className={styles.logoContainer}>
      <Link to={'/'}><LogoSvg/></Link>
    </span>
  )
}

export default Logo;