import React, { memo } from 'react';

import { MdColorLens } from 'react-icons/md';

import styles from './styles.module.scss';

interface IField {
  value: string | number | boolean | any;
  onChange: (value: string | number | boolean | any) => void;
}

const NameFC = (props: IField) => {
  return (
    <label className={styles.inputContainer} htmlFor="name">
      Nome
      <input
        type="text"
        id="name"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </label>
  );
};

const DescriptionFC = (props: IField) => {
  return (
    <label
      className={`${styles.inputContainer} ${styles.description}`}
      htmlFor="description"
    >
      Descrição
      <textarea
        id="description"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </label>
  );
};

const ColorSelectFC = (props: IField) => {
  return (
    <label className={styles.inputContainer} htmlFor="color">
      Cor
      <div className={styles.inputColor}>
        <MdColorLens />
        <input
          type="color"
          id="color"
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
        />
      </div>
    </label>
  );
};

export const Name = memo(NameFC);
export const Description = memo(DescriptionFC);
export const ColorSelect = memo(ColorSelectFC);
