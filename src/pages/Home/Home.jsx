import React from 'react';
import cn from 'classnames';
import { BrowserRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import styles from './Home.module.scss';
import Separator from 'components/Separator/Separator';

const Home = (props) => {

  return (
    <>
      <section className={ cn(styles.wrapper) } id="home">
        <div className="content">
          <h1>Your subprime clients want to buy a car.</h1>
          <h1>You provide them with the perfect solution.</h1>
          <h1>Astute fits the pieces together.</h1>
          <BrowserRouter>
            <HashLink to="#test" smooth className={ cn('button', 'light', 'transparent') }>Take the Test</HashLink>
            <HashLink to="#contact" smooth className={ cn('button', 'light', styles.button) }>Contact Us</HashLink>
          </BrowserRouter>
        </div>
      </section>
      <Separator
        transparent={ true }
        topArrowColor={ 'light' }
        bottomArrowColor={ 'light' }
      />
    </>
  );
}

export default Home;
