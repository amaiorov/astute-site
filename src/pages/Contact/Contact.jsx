import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import axios from 'axios';

import styles from './Contact.module.scss';

const Contact = (props) => {

  let [errorCount, setErrorCount] = useState();
  let [sending, setSending] = useState(0);
  const brevoApiKey = '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';

  const sendingStates = {
    0: 'not yet sent',
    1: 'sending...',
    2: 'send success',
    3: 'send fail',
  }

  useEffect((props) => {

  }, [errorCount]);

  const checkForm = (evt) => {
    evt.preventDefault();
    let scrolled = false;
    let errors = 0;

    document.querySelectorAll('[required]').forEach((item, i) => {
      if (!item.value) {
        item.classList.add(styles.error);
        errors++;
        if (!scrolled) {
          let el = item.nextSibling;
          let pos = el.getBoundingClientRect().top + window.pageYOffset - 140;
          window.scrollTo({ top: pos, behavior: 'smooth' });

          // item.nextSibling.scrollIntoView({ behavior: 'smooth' });
          scrolled = true;
        }
      } else {
        item.classList.remove(styles.error);
      }
    });

    setErrorCount(errors);
    if (errors === 0) {
      setSending(1);
      axios({
        method: 'POST',
        url: 'https://api.brevo.com/v3/smtp/email',
        headers: {
          'accept': 'application/json',
          'api-key': brevoApiKey,
          'content-type': 'application/json'
        },
        data: {
          'sender': {  
            'name': 'Astute.com Contact Request',
            'email': 'hello@astute.com'
          },
          'to': [  
            {  
              'email': 'dkich96@gmail.com',
              'name': 'Dmitry Kichin'
            }
          ],
          'subject': 'Test',
          'htmlContent': (
            `<html>
              <head></head>
              <body>
                <h3>Contact request from Astute.com</h3>
                <div><b>Name</b>: ${document.querySelector('#first-name').value} ${document.querySelector('#last-name').value}</div>
                <div><b>E-mail</b>: ${document.querySelector('#e-mail').value}</div>
                <div><b>Organization</b>: ${document.querySelector('#organization').value}</div>
                <div><b>Phone</b>: ${document.querySelector('#phone').value} || 'not provided'</div>
                <div><b>How did you find us</b>: ${document.querySelector('#source').value}</div>
                <div><b>Inquiry</b>: ${document.querySelector('#inquiry').value}</div>
              </body>
            </html>`
          )
        }
      }).then((data) => {
        if (errors === 0) {
          document.querySelector('form').classList.add(styles.collapsed);
        }
        setSending(2);
      }).catch(() => {
        setSending(3);
      });
    }
  };

  return (
    <section className={ styles.wrapper } id="contact">
      <div className="content">
        <h1>Contact Us</h1>
        { (sending === 0 || sending === 1) &&
          <>
            <p>If you have any question about Astute Subprime Consulting, feel free to ask us using the form below.<br />We will get back to you within one business day.</p>
          </>
        }
        {/* { typeof errorCount !== 'undefined' && errorCount === 0 && */}
        { sending === 2 &&
          <>
            <h2>Thank you for contacting us!</h2>
            <p>We will get back to you within one business day.</p>
          </>
        }
        <form>
          <div className={ styles.row }>
            <div>
              <input required type="text" id="first-name" />
              <label htmlFor="first-name">First Name</label>
            </div>
            <div>
              <input required type="text" id="last-name" />
              <label htmlFor="last-name">Last Name</label>
            </div>
          </div>
          <div className={ styles.row }>
            <div>
              <input required type="text" id="e-mail" />
              <label htmlFor="e-mail">E-mail</label>
            </div>
          </div>
          <div className={ styles.row }>
            <div>
              <input required type="text" id="organization" />
              <label htmlFor="organiztion">Organization</label>
            </div>
          </div>
          <div className={ styles.row }>
            <div>
              <input type="text" id="phone" />
              <label htmlFor="phone">Phone</label>
            </div>
          </div>
          <div className={ styles.row }>
            <div>
              <select id="source">
                <option name="Internet search">Internet Search</option>
                <option name="Word of mouth">Word of Mouth</option>
                <option name="Industry trade fair">Industry Trade Fair</option>
              </select>
              <label htmlFor="source">How did you find us?</label>
            </div>
          </div>
          <div className={ styles.row }>
            <div>
              <textarea required name="inquiry" id="inquiry"></textarea>
              <label htmlFor="inquiry">Inquiry</label>
            </div>
          </div>
          <a href="#send" className={ cn('button', 'dark') } onClick={ checkForm }>Send{ sending === 1 && 'ing...' }</a>
          { sending === 3 &&
            <div><br /><br />Your request could not be sent, please try again.</div>
          }
        </form>
      </div>
    </section>
  );
}

export default Contact;
