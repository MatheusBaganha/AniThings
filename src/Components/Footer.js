import React from 'react';
import Nav from './Nav';
import styles from './nav.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Nav header={null} />
    </footer>
  );
};

export default Footer;
