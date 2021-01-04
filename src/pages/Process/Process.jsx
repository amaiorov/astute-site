import React from 'react';
import cn from 'classnames';

import styles from './Process.module.scss';

const Process = (props) => {

  return (
    <>
      <section className={ cn(styles.wrapper) }>
        <div className="content">
          <h1>Our Innovative Process</h1>
          <p>Our proven system utilizes an intake of Subprime consumer,<br />identifies all reasonable vehicle finance options with lowest barriers and matches the options to proper inventory selection.</p>
          <ol className={ styles.steps }>
            <li className={ styles.analysis }>
              <span className={ styles.tag }>Analysis</span>
              <span className={ styles.title }>Pop the Hood!</span>
              <span className={ styles.subtitle }>
                Perform an analysis of your business to identify potential additional sales/revenues missed
                <span>Let’s learn where the leaks are. Is it in Sales, F&I, lending partners?</span>
              </span>
              <div className={ styles.description }>
                <ul>
                  <li>We will analyze 30 days worth of your submissions, sales and funding to identify potential additional revenues missed</li>
                  <li>We will deliver assessment on strengths and weaknesses and make strategic recommendations on lenders and subprime practice to help maximize all missed opportunities</li>
                </ul>
              </div>
            </li>
            <li className={ styles.training }>
              <span className={ styles.tag }>Training</span>
              <span className={ styles.title }>Take a Test Drive!</span>
              <span className={ styles.subtitle }>
                Provide our proprietary training to your team of Sales, F&I, and Sales Managers
                <span>Improve your infrastructure to better server your current customers.</span>
              </span>
              <div className={ styles.description }>
                <ul>
                  <li>If warranted will bring in non-recourse near prime and sub-prime lenders to help your organization better serve the subprime consumer segment at a larger profit margins</li>
                  <li>
                    Provide our proprietary training to Sales, F&amp;I, and Sales Mangers
                    <ul>
                      <li><b>Sales</b> will be trained to identify and to establish a correct procedure with the consumer</li>
                      <li>
                        <b>F&amp;I</b> will be trained to structure deals and obtain better adequate approvals for consumers with less obstacles to facilitate the sale
                        <ul>
                          <li>Will learn all lenders strengths and weaknesses to better to increase per copy front and back end gross</li>
                          <li>Learn the art of credit reporting interpretation</li>
                          <li>Provide remote assist on application submission and structuring</li>
                        </ul>
                      </li>
                      <li><b>Sales Managers/Front Desk</b> will be advised on deal structuring, inventory selection and sub-prime consumer mindset</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li className={ styles.strategy }>
              <span className={ styles.tag }>Strategy</span>
              <span className={ styles.title }>Hit the Road!</span>
              <span className={ styles.subtitle }>
                Devise a marketing strategy that best fits your dealership’s goals
                <span>See how we can expand your reach into Subprime.</span>
              </span>
              <div className={ styles.description }>
                <ul>
                  <li>We will review your ROI on dollars spent to attract the subprime consumer</li>
                  <li>Recommend best in practice and low cost marketing strategies (conventional and digital) to attract sub-prime and near-prime consumers to your organization</li>
                  <li>Implement an ROI monitoring for advertisement</li>
                </ul>
              </div>
            </li>
          </ol>
        </div>
      </section>
      <div className={ styles.separator }></div>
    </>
  );
}

export default Process;
