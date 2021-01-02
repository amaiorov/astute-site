import React from 'react';
import styles from './Header.module.scss';

const Header = (props) => {

  return (
    <header className={ styles.wrapper }>
      <div className={ styles.logo }>logo</div>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#process">Process</a>
      <a href="#faq">FAQ</a>
      <a href="#test">Test</a>
      <a href="#contact">Contact Us</a>
    </header>
  );
}

export default Header;
