import React from 'react';
import cn from 'classnames';

import styles from './About.module.scss';

const About = (props) => {

  return (
    <section className={ cn('light', styles.wrapper) }>
      <div className="content">
        <section className={ styles.about}>
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
        </section>
        <section className={ styles.challenges }>
          <h1>What Challenges Does Your Dealership Face?</h1>
          <ul>
            <li>We lose potential sales monthly because we are unable to accommodate subprime customers...</li>
            <li>We are not sure our business strategy for subprime customers us accurate...</li>
            <li>We think subprime deals require a large down payment and have a long booking time...</li>
            <li>Our business is small and does not have a dedicated special finance team...</li>
            <li>We do not see any significant financial benefits for our business in catering specifically to subprime customers...</li>
          </ul>
          <h1>We Can Solve Your Problems with Our Innovative Process!</h1>
        </section>
      </div>
    </section>
  );
}

export default About;