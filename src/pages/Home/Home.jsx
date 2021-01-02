import React from 'react';
import styles from './Home.module.scss';

const Home = (props) => {

  return (
    <section className={ styles.wrapper }>
      <h1>Your subprime clients want to buy a car.</h1>
      <h1>You provide them with the perfect solution.</h1>
      <h1>Astute fits the pieces together.</h1>
      <a href="#test">Take the Test</a>
      <a href="#contact">Contact Us</a>
    </section>
  );
}

export default Home;
