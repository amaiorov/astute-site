import React from 'react';
import cn from 'classnames';

import styles from './Separator.module.scss';

const Separator = (props) => {

  return (
    <>
      <div className={ cn({
        [styles.separator]: true,
        [styles.transparent]: props.transparent,
        [styles['top-bg-' + props.topBgColor]]: props.topBgColor,
        [styles['bottom-bg-' + props.bottomBgColor]]: props.bottomBgColor,
        [styles['top-arrow-' + props.topArrowColor]]: props.topArrowColor,
        [styles['bottom-arrow-' + props.bottomArrowColor]]: props.bottomArrowColor
      }) }></div>
    </>
  );
}

export default Separator;
