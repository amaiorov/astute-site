import React from 'react';
import styles from './Footer.module.scss';

const Footer = (props) => {

  return (
    <footer className={ styles.wrapper }>
      <div className={ styles.logo }>
        logo
        <span>&copy; Astute Subprime Consulting { new Date().getFullYear() }</span>
      </div>
      <div>
        Astute Subprime Consulting
        <br />
        +1 908-217-1108
        <br />
        <a href="mailto:hello@astutesubprime.com">hello@astutesubprime.com</a>
        <br />
        <a href="#privacy">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;
