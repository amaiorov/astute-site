import React, { useState, useEffect } from 'react';
import cn from 'classnames';

import styles from './Contact.module.scss';

const Contact = (props) => {

  let [errorCount, setErrorCount] = useState();

  useEffect((props) => {
    console.log('contact');
  }, [errorCount]);

  const checkForm = (evt) => {
    let scrolled = false;
    let errors = 0;
    evt.preventDefault();
    document.querySelectorAll('[required]').forEach((item, i) => {
      if (!item.value) {
        item.classList.add(styles.error);
        errors++;
        if (!scrolled) {
          item.nextSibling.scrollIntoView({ behavior: 'smooth' });
          scrolled = true;
        }
      } else {
        item.classList.remove(styles.error);
      }
    });
    if (errors === 0) {
      document.querySelector('form').classList.add(styles.collapsed);
    }
    setErrorCount(errors);
  };

  return (
    <section className={ styles.wrapper } id="contact">
      <div className="content">
        <h1>Contact Us</h1>
        { (typeof errorCount === 'undefined' || errorCount > 0) &&
          <>
            <p>If you have any question about Astute Subprime Consulting, feel free to ask us using the form below.<br />We will get back to you within one business day.</p>
          </>
        }
        { typeof errorCount !== 'undefined' && errorCount === 0 &&
          <>
            <h2>Thank you for contacting us!</h2>
            <p>We will get back to you within one business day.</p>
          </>
        }
        <form>
          <div className={ styles.grid }>
            <div className={ styles.col }>
              <input required type="text" id="first-name" />
              <label htmlFor="first-name">First Name</label>
            </div>
            <div className={ styles.col }>
              <input required type="text" id="last-name" />
              <label htmlFor="last-name">Last Name</label>
            </div>
          </div>
          <div className={ styles.grid }>
            <div className={ styles.col }>
              <input required type="text" id="e-mail" />
              <label htmlFor="e-mail">E-mail</label>
            </div>
          </div>
          <div className={ styles.grid }>
            <div className={ styles.col }>
              <input required type="text" id="organiztion" />
              <label htmlFor="organiztion">Organization</label>
            </div>
          </div>
          <div className={ styles.grid }>
            <div className={ styles.col }>
              <input type="text" id="phone" />
              <label htmlFor="phone">Phone</label>
            </div>
          </div>
          <div className={ styles.grid }>
            <div className={ styles.col }>
              <select id="source">
                <option name="Internet search">Internet Search</option>
                <option name="Word of mouth">Word of Mouth</option>
                <option name="Industry trade fair">Industry Trade Fair</option>
              </select>
              <label htmlFor="source">How did you find us?</label>
            </div>
          </div>
          <div className={ styles.grid }>
            <div className={ styles.col }>
              <textarea required name="inquiry" id="inquiry"></textarea>
              <label htmlFor="inquiry">Inquiry</label>
            </div>
          </div>
          <a href="#send" className={ cn('button', 'dark') } onClick={ checkForm }>Send</a>
        </form>
      </div>
    </section>
  );
}

export default Contact;
