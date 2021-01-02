import React, { useEffect } from 'react';
import styles from './Test.module.scss';

const Test = (props) => {

  useEffect((props) => {
    console.log('take the test');
  })

  return (
    <section className={ styles.wrapper }>
      <h2>What Can I Expect?</h2>
      <h3>Take the Test!</h3>
      <p>Answer two simple questions to find out how much is your potential additional income and how Astute Subprime Lending can help your business.</p>
      <ul>
        <li>
          <span className={ styles.title }>Q1: How many customers do you lose because of credit per month?</span>
          <button>5 customers</button>
          <button>10 customers</button>
          <button>15 customers</button>
          <button>20 customers</button>
          <a href="#q2">Next</a>
        </li>
        <li>
          <span className={ styles.title }>Q2: Do you want help to capture half of them?</span>
          <button>Yes</button>
          <button>No</button>
          <a href="#results">See Result</a>
        </li>
        <li>
          <span className={ styles.title }>Learn your possible additional income.</span>
          <p>Learn your possible additional income.</p>
          <span className={ styles.title }>
            If you capture half, you potential additional income is<br /><b>$32,000</b> per month
            <br />
            <br />
            ...that’s a total of<br /><b>$384,000</b> per year.
            <br />
            <br />
            <br />
            Do you want to learn more?
          </span>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>

    </section>
  );
}

export default Test;
