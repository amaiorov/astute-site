import React from 'react';
import styles from './About.module.scss';

const About = (props) => {

  return (
    <section className={ styles.wrapper }>
      <section className={ styles.about}>
        <h2>We are Astute Subprime Consultants and we help auto dealers serve the subprime consumer segment at a profit</h2>
        <p>We connect consumer and dealers with over 15 quality subprime and near-prime lenders. We train Sales, F&amp;I, and Management in the art of customer guidance, subprime deal structuring and inventory selection. We offer a proprietary real time post sales funding process to minimize funding lag-time.</p>
        <ul>
          <li className={ styles.consulting }>
            <h3>Subprime Consulting</h3>
            <span>Connect the dots between your subprime clients and their best lenders</span>
          </li>
          <li className={ styles.analysis }>
            <h3>Analysis</h3>
            <span>Examine your business to seek out potential sales and missed revenue</span>
          </li>
          <li className={ styles.training }>
            <h3>Training</h3>
            <span>Equip your team with tools for success, using our proprietary training</span>
          </li>
          <li className={ styles.strategy }>
            <h3>Strategy</h3>
            <span>Design a marketing strategy that is aligned with your business needs</span>
          </li>
          <li className={ styles.support }>
            <h3>Support</h3>
            <span>Foster a lasting partnership and see your business goals through to the end</span>
          </li>
        </ul>
      </section>
      <section className={ styles.challenges }>
        <h2>What Challenges Does Your Dealership Face?</h2>
        <ul>
          <li>We lose potential sales monthly because we are unable to accommodate subprime customers...</li>
          <li>We are not sure our business strategy for subprime customers us accurate...</li>
          <li>We think subprime deals require a large down payment and have a long booking time...</li>
          <li>Our business is small and does not have a dedicated special finance team...</li>
          <li>We do not see any significant financial benefits for our business in catering specifically to subprime customers...</li>
        </ul>
        <h2>We Can Solve Your Problems with Our Innovative Process!</h2>
      </section>
    </section>
  );
}

export default About;
