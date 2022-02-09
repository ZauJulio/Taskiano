import React, { memo, useState } from 'react';

import styles from './styles.module.scss';

interface ICheckBox {
  className?: string;
  checked?: boolean;
  onClick?: () => void;
}

function CheckBoxFC(props: ICheckBox) {
  const [checked, setChecked] = useState(props.checked);

  const handleChange = () => {
    props.onClick && props.onClick();
    setChecked(!checked);
  };

  return (
    <svg onClick={handleChange} className={styles.checkbox} fill="currentColor">
      <path
        className={`${styles.checked} ${checked ? styles.active : ''}`}
        d="M14 0h-12c-1.1 0-2 0.9-2 2v12c0 1.1 0.9 2 2 2h12c1.1 0 2-0.9 2-2v-12c0-1.1-0.9-2-2-2zM7 12.414l-3.707-3.707 1.414-1.414 2.293 2.293 4.793-4.793 1.414 1.414-6.207 6.207z"
      />

      <path
        className={`${styles.unchecked} ${checked ? styles.active : ''}`}
        d="m14 0h-12c-1.1 0-2 0.9-2 2v12c0 1.1 0.9 2 2 2h12c1.1 0 2-0.9 2-2v-12c0-1.1-0.9-2-2-2zm0 14h-12v-12h12v12z"
      />
    </svg>
  );
}

const CheckBox = memo(CheckBoxFC);
export default CheckBox;
