import React from 'react';
import styles from './Footer.module.scss';

const Footer = (props) => {

  const phone = '+1 908-217-1108';
  const email = 'hello@astutesubprime.com';

  return (
    <footer className={ styles.wrapper }>
      <div className="content">
        <div className={ styles.left }>
          <div className={ styles.logo }></div>
          <span>&copy; Astute Subprime Consulting { new Date().getFullYear() }</span>
        </div>
        <div className={ styles.right }>
          Astute Subprime Consulting
          <br />
          { phone }
          <br />
          <a href={ 'mailto: ' + email }>{ email }</a>
          <br />
          <a href="#privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
