import React from 'react'

import { GiAlarmClock } from 'react-icons/gi'
import { BsCalendarFill } from 'react-icons/bs'

import { selectColorByTime } from '../../utils'

import colors from '../../styles/colors'
import styles from './styles.module.scss'

interface IClocktimer {
  remainingTime?: number
}

export function ClockTimer({ remainingTime = 0 }: IClocktimer) {
  const style = {
    backgroundColor: selectColorByTime(remainingTime)
  }

  return (
    <>
      {remainingTime > 0 ? (
        <div className={styles.clockTimerContainer} style={style}>
          <GiAlarmClock color={colors.dark} />
        </div>
      ) : (
        <div className={styles.calendarTimeContainer}>
          <BsCalendarFill />
        </div>
      )}
    </>
  )
}
