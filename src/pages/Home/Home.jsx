import React from 'react';
import cn from 'classnames';

import styles from './Home.module.scss';

const Home = (props) => {

  return (
    <section className={ cn('dark', styles.wrapper) }>
      <div className="content">
        <h1>Your subprime clients want to buy a car.</h1>
        <h1>You provide them with the perfect solution.</h1>
        <h1>Astute fits the pieces together.</h1>
        <a href="#test" className={ cn('button', 'light', 'transparent') }>Take the Test</a>
        <a href="#contact" className={ cn('button', 'light') }>Contact Us</a>
      </div>
    </section>
  );
}

export default Home;
