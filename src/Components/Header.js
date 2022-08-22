import React from 'react';
import Nav from './Nav';
import styles from './nav.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Nav header="true" />
    </header>
  );
};

export default Header;
