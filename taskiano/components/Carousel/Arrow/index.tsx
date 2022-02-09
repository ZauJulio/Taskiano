import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import styles from './styles.module.scss';

interface IArrow {
  className?: string;
  show?: boolean;
  direction: 'left' | 'right';
  onClick: () => void;
}

function Arrow(props: IArrow) {
  return (
    <>
      {props.show && (
        <div
          className={`${styles.circleIcon} ${props.className ?? ''}`}
          onClick={props.onClick}
        >
          {props.direction === 'left' ? (
            <IoIosArrowBack />
          ) : (
            <IoIosArrowForward />
          )}
        </div>
      )}
    </>
  );
}

export default Arrow;
