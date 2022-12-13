import React from 'react';
import styles from './logo.module.css';
import LogoSvg from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <span className={styles.logoContainer}>
      <Link to={'/'}>
        <img src={LogoSvg} alt="Logo AniThings" />
      </Link>
    </span>
  );
};

export default Logo;
