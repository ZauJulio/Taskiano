import React from 'react'

import styles from './styles.module.scss'

interface IButtonProvider {
  name: string
  provider: string
  handleSingIn: (provider: string) => void
  children: React.ReactNode
}

function ButtonProvider(props: IButtonProvider) {
  return (
    <button
      className={styles.signInButton}
      onClick={() => props.handleSingIn(props.provider)}
    >
      {props.children}
      {props.name}
    </button>
  )
}

export default ButtonProvider
