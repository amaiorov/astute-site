import React, { useEffect } from 'react';
import cn from 'classnames';

import styles from './FAQ.module.scss';

const FAQ = (props) => {

  useEffect((props) => {
    console.log('accordion');
  })

  const seeMore = (evt) => {
    evt.preventDefault();
    console.log('see more');
  }

  return (
    <section className={ cn('light', styles.wrapper) }>
      <h1>Frequently Asked Questions</h1>
      <dl>
        <dt>Do I need a standalone special finance department?</dt>
        <dd>No, you do not need the stand alone department to be to assist subprime consumers.</dd>
        <dt>How long is the average booking time with the subprime lenders?</dt>
        <dd>A clean deal book within three to four days after arriving at the lender.</dd>
        <dt>Is it true that SubPrime is dirty and require a lot of attention?</dt>
        <dd>No, if your deal is structured correctly and stips are present then the deals are same as your traditional captive funding.</dd>
        <dt>Do SubPrime deals always require a large down payment?</dt>
        <dd>Absolutely not, plenty of good lenders have ZERO down to $500 down programs available.</dd>
        <dt>Is it true that Subprime LTVs are low?</dt>
        <dd>On most tiers the LTVs are 120% line 3 and 130% line 5.</dd>
        <dt>Why do I need indirect lenders when I have my captives?</dt>
        <dd>Captives prefer to cherry pick paper and usually their programs at 620 FICO and below are not competitive. Captives usually reduce LTVs at lower tiers causing your organization to miss front and back gross.</dd>
        <dt>Why am I not capturing SubPrime deals?</dt>
        <dd>Either you do not have a sales process to guide the consumer to the correct inventory, or the lenders to give the consumer a chance to rebuild their credit.</dd>
        <dt>Can I finance people with open or recently discharged bankruptcy?</dt>
        <dd>Yes you will be able to offer financing to consumers in chapter 7 open or discharged and chapter 13 that is confirmed by the trustee.</dd>
        <a href="#more" className={ cn('button', 'dark', 'transparent') } onClick={ seeMore }>See More</a>
        <dt>What is the benefit to my organization to serve the SubPrime consumer?</dt>
        <dd>You will help the consumer while increasing your sales volume and gross. Furthermore you will develop loyalty amongst the consumer for future service and sales business.</dd>
        <dt>I heard SubPrime deals have very high bank fees?</dt>
        <dd>Some, very low tier deals have higher fees, however most fees range between $95 to $995. Furthermore, some deals have negative fees where the lender pays you in adtition to the reserve.</dd>
        <dt>What is the average per copy on a SubPrime Deal?</dt>
        <dd>We strive for a $3,200 per copy after fee average!</dd>
        <dt>How many extra contracts can I anticipate?</dt>
        <dd>If you operate within your current structure, you will be able to offer options to most customers that leave your lot unhelped. You will probably be able to capture half of their business! If you want to further build a standalone department, depending on size you can capture anywhere between 40 to 150 adtitional sales.</dd>
        <dt>What are the benefits to my organization by offering financing to special finance customers?</dt>
        <dd>You will be able to serve the consumers, while increasing the dealership’s profits as well as employees’ income and retention.</dd>
      </dl>
    </section>
  );
}

export default FAQ;
