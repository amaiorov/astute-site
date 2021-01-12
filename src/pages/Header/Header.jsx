import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { BrowserRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import styles from './Header.module.scss';

const Header = (props) => {

  let [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect((props) => {
    window.addEventListener('scroll', (evt) => {
      console.log(window.pageYOffset)
    });
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle('no-scroll');
  };

  return (
    <header className={ styles.wrapper }>
      <span className={ cn({
          [styles['mobile-menu']]: true,
          [styles.open]: isMobileMenuOpen
        }) } onClick={ toggleMobileMenu }></span>
      <div className={ cn({
          content: true,
          [styles.open]: isMobileMenuOpen
        }) }>
        <div className={ styles.logo }></div>
        <BrowserRouter>
          <HashLink to="#home" onClick={ toggleMobileMenu } smooth>Home</HashLink>
          <HashLink to="#about" onClick={ toggleMobileMenu } smooth>Who We Are</HashLink>
          <HashLink to="#process" onClick={ toggleMobileMenu } smooth>Our Process</HashLink>
          <HashLink to="#faq" onClick={ toggleMobileMenu } smooth>FAQ</HashLink>
          <HashLink to="#test" onClick={ toggleMobileMenu } smooth>Take The Test</HashLink>
          <HashLink to="#contact" onClick={ toggleMobileMenu } smooth className={ cn('button', 'light', styles.button) }>Contact Us</HashLink>
        </BrowserRouter>
      </div>
    </header>
  );
}

export default Header;
