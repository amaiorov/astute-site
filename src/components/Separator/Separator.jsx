import React from 'react';
import cn from 'classnames';

import styles from './Separator.module.scss';

const Separator = (props) => {

  return (
    <>
      <div className={ cn({
        [styles.separator]: true,
        [styles['top-bg-' + props.topBgColor]]: true,
        [styles['bottom-bg-' + props.bottomBgColor]]: true,
        [styles['top-arrow-' + props.topArrowColor]]: true,
        [styles['bottom-arrow-' + props.bottomArrowColor]]: true
      }) }></div>
    </>
  );
}

export default Separator;
