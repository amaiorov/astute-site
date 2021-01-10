import React, { useState } from 'react';
import cn from 'classnames';

import styles from './Test.module.scss';
import Separator from 'components/Separator/Separator';

const Test = (props) => {

  let [slide, setSlide] = useState(0);
  let [answers, setAnswers] = useState({});

  const curr = (num, p) => {
    if (isNaN(num)) {
      return undefined;
    }
    return '$' + num.toFixed(p || 0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };

  const rotate = () => {
    console.log(slide);
    if (slide + 1 === 3) {
      setSlide(0);
      setAnswers({});
    } else {
      setSlide(slide + 1);
    }
  }

  const answer = (evt) => {
    const key = evt.target.value.split(':')[0];
    const val = evt.target.value.split(':')[1];
    setAnswers({...answers, [key]: val});
  }

  return (
    <>
      <section className={ styles.wrapper }>
        <div className="content">
          <h1>What Can I Expect?</h1>
          <h3>Take the Test!</h3>
          <p>Answer two simple questions to find out how much is your potential additional income<br /> and how Astute Subprime Lending can help your business.</p>
          <ul data-current-slide={ slide }>
            <li>
              <span className={ styles.title }>Q1: How many customers do you lose because of credit per month?</span>
              <button value="1:5" onClick={ answer } className={ cn({[styles.selected]: answers[1] === '5'}) }>5 customers</button>
              <button value="1:10" onClick={ answer } className={ cn({[styles.selected]: answers[1] === '10'}) }>10 customers</button>
              <button value="1:15" onClick={ answer } className={ cn({[styles.selected]: answers[1] === '15'}) }>15 customers</button>
              <button value="1:20" onClick={ answer } className={ cn({[styles.selected]: answers[1] === '20'}) }>20 customers</button>
              <a href="#q2" className={ cn({
                  'button': true,
                  'light': true,
                  [styles.disabled]: !answers[1]
                }) } onClick={ rotate }>Next</a>
            </li>
            <li>
              <span className={ styles.title }>Q2: Do you want help to capture half of them?</span>
              <button value="2:yes" onClick={ answer } className={ cn({[styles.selected]: answers[2] === 'yes'}) }>Yes</button>
              <button value="2:no" onClick={ answer } className={ cn({[styles.selected]: answers[2] === 'no'}) }>No</button>
              <a href="#results" className={ cn({
                  'button': true,
                  'light': true,
                  [styles.disabled]: !answers[2]
                }) } onClick={ rotate }>See Result</a>
            </li>
            <li>
              <span className={ styles.title }>Learn your possible additional income.</span>
              <span className={ styles.title }>
                If you capture half, you potential additional income is<br /><b>{ curr((parseInt(answers[1]) / 2) * 3200) }</b> per month
                <br />
                <br />
                <br />
                ...that’s a total of<br /><b>{ curr((parseInt(answers[1]) / 2) * 3200 * 12) }</b> per year.
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                Do you want to learn more?
              </span>
              <a href="#contact" className={ cn('button', 'light') }>Contact Us</a>
              <a href="#contact" className={ cn('button', 'light', 'transparent', styles.retake) } onClick={ rotate }>Retake</a>
            </li>
          </ul>
        </div>
      </section>
      <Separator
        topBgColor={ 'black' }
        bottomBgColor={ 'gray-bg-xx-light' }
        topArrowColor={ 'light' }
        bottomArrowColor={ 'dark' }
      />
    </>
  );
}

export default Test;
