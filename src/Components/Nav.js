import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import useWindowDimensions from '../Hooks/useWindowDimensions';
import styles from './nav.module.css';

const Nav = ({ header }) => {
  const [isMobile, setIsMobile] = React.useState(false);
  const { width } = useWindowDimensions();
  const navRef = React.useRef();

  React.useEffect(() => {
    if (width < 750) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  function handleClick(e) {
    e.preventDefault();
    navRef.current.classList.toggle('aberto');
  }

  const closeMenuWhenRoute = React.useCallback((e) => {
    navRef.current.classList.remove('aberto');
  }, []);

  if (header) {
    return (
      <nav ref={navRef} className={styles.nav}>
        {isMobile && (
          <button
            onClick={handleClick}
            className={styles.menuMobileBtn}
          ></button>
        )}
        <Logo />
        <ul className={styles.navUl}>
          <Link to="/procurar" end="true">
            <li onClick={closeMenuWhenRoute}>Procurar</li>
          </Link>
          <Link to="/frases">
            <li onClick={closeMenuWhenRoute}>Frases</li>
          </Link>
          <Link to="/populares">
            <li onClick={closeMenuWhenRoute}>Populares</li>
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
