import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { BrowserRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import styles from './Header.module.scss';

const Header = (props) => {

  let [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  let [isHeaderSticky, setIsHeaderSticky] = useState(false);

  useEffect((props) => {
    window.addEventListener('scroll', (evt) => {
      let about = document.querySelector('#challenges');
      if (window.pageYOffset > 145) {
        setIsHeaderSticky(true);
      } else {
        setIsHeaderSticky(false);
      }
    });
  }, []);

  const getScrollPercentage = (el) => {
    const windowScroll = window.pageYOffset;
    const windowHeight = window.innerHeight;
    // const about = document.querySelector('#about');
    const elTop = el.offsetTop;
    const elHeight = el.offsetHeight;
    const p = ((windowScroll - elTop + windowHeight) / elHeight * 100).toFixed(1);
    if (p < 0 || p > 100) {
      return null;
    } else {
      console.log(el.id + ': ' + p);
      return el.id + ': ' + p;
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle('no-scroll');
  };

  return (
    <header className={ cn({
        [styles.wrapper]: true,
        [styles.sticky]: isHeaderSticky,
      }) }>
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
