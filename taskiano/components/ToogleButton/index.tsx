import React from 'react'

import styles from './styles.module.scss'

interface IToogleButton {
  className?: string
  onChange: (value: any) => void
  value: any
}

function ToogleButton(props: IToogleButton) {
  return (
    <div className={`${styles.switchContainer} ${props.className}`}>
      <input
        id="switch-shadow"
        className={`${styles.switch} ${styles.switchShadow}`}
        type="checkbox"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
      <label htmlFor="switch-shadow" />
    </div>
  )
}

export default ToogleButton
