import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import styles from './nav.module.css';

const Nav = ({ header }) => {
  if (header) {
    return (
      <nav className={styles.nav}>
        <Logo />
        <ul className={styles.navUl}>
          <Link to="/procurar" end="true">
            <li>Procurar</li>
          </Link>
          <Link to="/frases">
            <li>Frases</li>
          </Link>
          <Link to="/populares">
            <li>Populares</li>
          </Link>
        </ul>
      </nav>
    );
  }

  if (header === null || undefined) {
    return (
      <nav className={styles.nav}>
        <span className={styles.logo}>
          <Logo />
        </span>

        <div className={styles.containerNav}>
          <h3 className={styles.tituloNav}>NAVEGAÇÃO</h3>
          <ul className={styles.navUl}>
            <Link to="/procurar" end="true">
              <li>Procurar</li>
            </Link>
            <Link to="/frases">
              <li>Frases</li>
            </Link>
            <Link to="/populares">
              <li>Populares</li>
            </Link>
          </ul>
        </div>

        <div className={styles.containerNav}>
          <h3 className={styles.tituloNav}>MAIS INFORMAÇÕES</h3>
          <ul className={styles.navUl}>
            <a
              href="https://soruly.github.io/trace.moe-api/#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>TraceMoe API</li>
            </a>
            <a
              href="https://animechan.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>AnimeChan API</li>
            </a>
            <a
              href="https://github.com/MatheusBaganha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Github</li>
            </a>
          </ul>
        </div>
      </nav>
    );
  }
};

export default Nav;
