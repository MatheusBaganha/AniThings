import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import Logo from './Logo';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Logo />
        <ul className={styles.navUl}>
          <Link to="/" end="true">
            <li>Procurar</li>
          </Link>
          <Link to="/Frases">
            <li>Frases</li>
          </Link>
          <Link to="/Populares">
            <li>Populares</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
