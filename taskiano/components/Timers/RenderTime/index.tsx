import React from 'react';
import { remainsFormatValue, remainsFormatText } from '../../../utils';

import styles from './styles.module.scss';

interface IRenderTime {
  remainingTime: number;
  elapsedTime: number;
}

function RenderTime(props: IRenderTime) {
  if (props.remainingTime === 0)
    return (
      <div className={`${styles.countdownContent} ${styles.over}`}>
        •
      </div>
    );

  return (
    <div className={styles.countdownContent}>
      <div className={styles.RemainsFormatValue}>
        {remainsFormatValue(props.remainingTime)}
      </div>

      <div className={styles.RemainsFormatText}>
        {remainsFormatText(props.remainingTime)}
      </div>
    </div>
  );
}

export default RenderTime;
