import React from 'react';
import cn from 'classnames';
import { BrowserRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import styles from './Header.module.scss';

const Header = (props) => {

  return (
    <header className={ styles.wrapper }>
      <div className="content">
        <div className={ styles.logo }></div>
        <BrowserRouter>
          <HashLink to="#home" smooth>Home</HashLink>
          <HashLink to="#about" smooth>Who We Are</HashLink>
          <HashLink to="#process" smooth>Our Process</HashLink>
          <HashLink to="#faq" smooth>FAQ</HashLink>
          <HashLink to="#test" smooth>Take The Test</HashLink>
          <HashLink to="#contact" smooth className={ cn('button', 'light', styles.button) }>Contact Us</HashLink>
        </BrowserRouter>
      </div>
    </header>
  );
}

export default Header;
