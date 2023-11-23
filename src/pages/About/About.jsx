import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import styles from './About.module.scss';
import Separator from 'components/Separator/Separator';

const About = (props) => {
  let [css, setCss] = useState({});

  useEffect((props) => {
    // let challenges = document.querySelector('#challenges ul');
    // window.addEventListener('scroll', (evt) => {
      // getScrollPercentage(challenges);
    // });
  }, []);

  // const getScrollPercentage = (el) => {
  //   const windowScroll = window.pageYOffset;
  //   const windowHeight = window.innerHeight;
  //   // const about = document.querySelector('#about');
  //   const elTop = el.offsetTop;
  //   const elHeight = el.offsetHeight;
  //   const p = ((windowScroll - elTop + windowHeight) / elHeight * 100).toFixed(1);
  //   console.log(p)
  //   if (p < 0 || p > 100) {
  //     return null;
  //   } else {
  //     // const bgSize = p + 50 + '%';
  //     // const bgPosition = 'center ' + p  + '%';
  //     const bgPosition = 'center ' + (p - 20)  + '%';
  //     setCss({
  //       // 'backgroundSize': bgSize,
  //       'backgroundPosition': bgPosition
  //     });
  //     return el.id + ': ' + p;
  //   }
  // };

  return (
    <>
      <section className={ cn(styles.wrapper, styles.about) } id="about">
        <div className="content">
          <h1>We are <u>Astute Subprime Consultants</u> and we help auto dealers serve the subprime consumer segment at a profit</h1>
          <p>We connect consumer and dealers with over 15 quality subprime and near-prime lenders. We train Sales, F&amp;I, and Management in the art of customer guidance, subprime deal structuring and inventory selection. We offer a proprietary real time post sales funding process to minimize funding lag-time.</p>
          <ul>
            <li className={ styles.consulting }>
              <h2>Subprime Consulting</h2>
              <span>Connect the dots between your subprime clients and their best lenders</span>
            </li>
            <li className={ styles.analysis }>
              <h2>Analysis</h2>
              <span>Examine your business to seek out potential sales and missed revenue</span>
            </li>
            <li className={ styles.training }>
              <h2>Training</h2>
              <span>Equip your team with tools for success, using our proprietary training</span>
            </li>
            <li className={ styles.strategy }>
              <h2>Strategy</h2>
              <span>Design a marketing strategy that is aligned with your business needs</span>
            </li>
            <li className={ styles.support }>
              <h2>Support</h2>
              <span>Foster a lasting partnership and see your business goals through to the end</span>
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
    <section className={ cn(styles.wrapper, styles.challenges) } id="challenges">
        <div className="content">
          <h1>What Challenges Does Your Dealership Face?</h1>
          <ul>
            <li><span>We lose potential sales monthly because we are unable to accommodate subprime customers...</span></li>
            <li><span>We are not sure our business strategy for subprime customers us accurate...</span></li>
            <li><span>We think subprime deals require a large down payment and have a long booking time...</span></li>
            <li><span>Our business is small and does not have a dedicated special finance team...</span></li>
            <li><span>We do not see any significant financial benefits for our business in catering specifically to subprime customers...</span></li>
            <li></li>
          </ul>
          <h1>We Can Solve Your Problems with <u>Our Innovative Process!</u></h1>
      </div>
    </section>
    <Separator
      topBgColor={ 'gray-bg-xx-light' }
      bottomBgColor={ 'gray-bg-light' }
      topArrowColor={ 'dark' }
      bottomArrowColor={ 'dark' }
    />
  </>
  );
}

export default About;
