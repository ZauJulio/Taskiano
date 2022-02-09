import React from 'react'
import { useHistory } from '../../hooks/useHistory'

import styles from './styles.module.scss'

function UserScore() {
  const history = useHistory((ctx) => ctx.history)

  return (
    <div className={styles.userScore}>
      <h1 className={styles.title}>Score</h1>
      <p className={styles.score}>{history?.score}</p>
    </div>
  )
}

export default UserScore
