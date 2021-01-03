import React from 'react';
import cn from 'classnames';

import styles from './Header.module.scss';

const Header = (props) => {

  return (
    <header className={ styles.wrapper }>
      <div className={ styles.logo }>logo</div>
      <a href="#home">Home</a>
      <a href="#about">Who We Are</a>
      <a href="#process">Our Process</a>
      <a href="#faq">FAQ</a>
      <a href="#test">Take The Test</a>
      <a href="#contact" className={ cn('button', 'light', styles.button) }>Contact Us</a>
    </header>
  );
}

export default Header;
