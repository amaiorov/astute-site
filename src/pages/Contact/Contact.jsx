import React, { useEffect } from 'react';
import cn from 'classnames';

import styles from './Contact.module.scss';

const Contact = (props) => {

  useEffect((props) => {
    console.log('contact');
  })

  return (
    <section className={ styles.wrapper }>
      <div className="content">
        <h1>Contact Us</h1>
        <p>If you have any question about Astute Subprime Consulting, feel free to ask us using the form below.<br />We will get back to you within one business day.</p>
        <form>
          <div className="grid">
            <div className="col">
              <label htmlFor="first-name">First Name</label>
              <input type="text" id="first-name" />
            </div>
            <div className="col">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" id="last-name" />
            </div>
          </div>
          <div className="grid">
            <div className="col">
              <label htmlFor="e-mail">E-mail</label>
              <input type="text" id="e-mail" />
            </div>
          </div>
          <div className="grid">
            <div className="col">
              <label htmlFor="organiztion">Organiztion</label>
              <input type="text" id="organiztion" />
            </div>
          </div>
          <div className="grid">
            <div className="col">
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" />
            </div>
          </div>
          <div className="grid">
            <div className="col">
              <label htmlFor="source">How did you find us?</label>
              <select id="source">
                <option name="Internet search">Internet Search</option>
                <option name="Word of mouth">Word of Mouth</option>
                <option name="Industry trade fair">Industry Trade Fair</option>
              </select>
            </div>
          </div>
          <div className="grid">
            <div className="col">
              <label htmlFor="inquiry">Inquiry</label>
              <textarea name="inquiry" id="inquiry"></textarea>
            </div>
          </div>
          <a href="#send" className={ cn('button', 'dark') }>Send</a>
        </form>
      </div>
    </section>
  );
}

export default Contact;
