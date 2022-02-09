import React, { ReactNode } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

import styles from './styles.module.scss';

interface IModal {
  className?: string;
  opacity?: number;
  children: ReactNode;
  close?: () => void;
}

function Modal(props: IModal) {
  return (
    <div
      className={`${styles.modal} ${props.className}`}
      style={{ background: `rgba(17, 18, 24, ${props.opacity ?? 0.85})` }} // $darkForce
    >
      <div className={styles.modalContainer}>
        {props.children}
        {props.close && (
          <AiFillCloseCircle
            className={styles.closeModal}
            onClick={props.close}
          />
        )}
      </div>
    </div>
  );
}

export default Modal;
