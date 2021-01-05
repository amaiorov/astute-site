import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import styles from './Test.module.scss';

const Test = (props) => {

  let [slide, setSlide] = useState(0);
  useEffect((props) => {
    console.log('take the test');
  });

  const rotate = () => {
    console.log(slide)
    setSlide(slide + 1 === 3 ? 0 : slide + 1);
    console.log(slide)
  }

  return (
    <section className={ styles.wrapper }>
      <div className="content">
        <h1>What Can I Expect?</h1>
        <h3>Take the Test!</h3>
        <p>Answer two simple questions to find out how much is your potential additional income<br /> and how Astute Subprime Lending can help your business.</p>
        <ul onClick={ rotate } data-current-slide={ slide }>
          <li>
            <span className={ styles.title }>Q1: How many customers do you lose because of credit per month?</span>
            <button>5 customers</button>
            <button>10 customers</button>
            <button>15 customers</button>
            <button>20 customers</button>
            <a href="#q2" className={ cn('button', 'light') }>Next</a>
          </li>
          <li>
            <span className={ styles.title }>Q2: Do you want help to capture half of them?</span>
            <button>Yes</button>
            <button>No</button>
            <a href="#results" className={ cn('button', 'light') }>See Result</a>
          </li>
          <li>
            <span className={ styles.title }>Learn your possible additional income.</span>
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
            <a href="#contact" className={ cn('button', 'light') }>Contact Us</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Test;
