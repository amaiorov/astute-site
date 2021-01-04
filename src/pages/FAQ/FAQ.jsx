import React, { useEffect } from 'react';
import cn from 'classnames';

import styles from './FAQ.module.scss';

const FAQ = (props) => {

  let wrapper;

  useEffect((props) => {
    wrapper = document.querySelector('.' + styles.wrapper);
    [...wrapper.querySelectorAll('dd')].forEach((item, i) => {
      item.classList.add(styles.collapsed);
    });
    // let el = document.getElementById('show-more').nextElementSibling;
    // while (el) {
    //   el.classList.add(styles.hidden);
    //   el = el.nextElementSibling;
    // }
  });

  const seeMore = (evt) => {
    evt.preventDefault();
    [...wrapper.getElementsByClassName(styles.hidden)].forEach((item, i) => {
      item.classList.remove(styles.hidden);
    });
    evt.target.classList.add(styles.hidden);
  };

  const expand = (evt) => {
    const el = evt.target.parentElement.nextSibling;
    if (el.style.height) {
      el.style.height = '';
    } else {
      const h = el.firstElementChild.offsetHeight;
      el.style.height = h + 'px';
    }
  }

  return (
    <section className={ cn(styles.wrapper) }>
      <div className="content">
        <h1>Frequently Asked Questions</h1>
        <dl>
          <dt><span onClick={ expand }>Do I need a standalone special finance department?</span></dt>
          <dd><span>No, you do not need the stand alone department to be to assist subprime consumers.</span></dd>
          <dt><span>How long is the average booking time with the subprime lenders?</span></dt>
          <dd><span>A clean deal book within three to four days after arriving at the lender.</span></dd>
          <dt><span>Is it true that SubPrime is dirty and require a lot of attention?</span></dt>
          <dd><span>No, if your deal is structured correctly and stips are present then the deals are same as your traditional captive funding.</span></dd>
          <dt><span>Do SubPrime deals always require a large down payment?</span></dt>
          <dd><span>Absolutely not, plenty of good lenders have ZERO down to $500 down programs available.</span></dd>
          <dt><span>Is it true that Subprime LTVs are low?</span></dt>
          <dd><span>On most tiers the LTVs are 120% line 3 and 130% line 5.</span></dd>
          <dt><span>Why do I need indirect lenders when I have my captives?</span></dt>
          <dd><span>Captives prefer to cherry pick paper and usually their programs at 620 FICO and below are not competitive. Captives usually reduce LTVs at lower tiers causing your organization to miss front and back gross.</span></dd>
          <dt><span>Why am I not capturing SubPrime deals?</span></dt>
          <dd><span>Either you do not have a sales process to guide the consumer to the correct inventory, or the lenders to give the consumer a chance to rebuild their credit.</span></dd>
          <dt><span>Can I finance people with open or recently discharged bankruptcy?</span></dt>
          <dd><span>Yes you will be able to offer financing to consumers in chapter 7 open or discharged and chapter 13 that is confirmed by the trustee.</span></dd>
          <a href="#more" className={ cn('button', 'dark', 'transparent') } onClick={ seeMore } id="show-more">See More</a>
          <dt><span>What is the benefit to my organization to serve the SubPrime consumer?</span></dt>
          <dd><span>You will help the consumer while increasing your sales volume and gross. Furthermore you will develop loyalty amongst the consumer for future service and sales business.</span></dd>
          <dt><span>I heard SubPrime deals have very high bank fees?</span></dt>
          <dd><span>Some, very low tier deals have higher fees, however most fees range between $95 to $995. Furthermore, some deals have negative fees where the lender pays you in adtition to the reserve.</span></dd>
          <dt><span>What is the average per copy on a SubPrime Deal?</span></dt>
          <dd><span>We strive for a $3,200 per copy after fee average!</span></dd>
          <dt><span>How many extra contracts can I anticipate?</span></dt>
          <dd><span>If you operate within your current structure, you will be able to offer options to most customers that leave your lot unhelped. You will probably be able to capture half of their business! If you want to further build a standalone department, depending on size you can capture anywhere between 40 to 150 adtitional sales.</span></dd>
          <dt><span>What are the benefits to my organization by offering financing to special finance customers?</span></dt>
          <dd><span>You will be able to serve the consumers, while increasing the dealership’s profits as well as employees’ income and retention.</span></dd>
        </dl>
      </div>
    </section>
  );
}

export default FAQ;
