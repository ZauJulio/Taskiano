import React, { useState } from 'react'

import View from './View'
import CheckBox from '../Checkbox'
import { ClockTimer } from '../ClockTimer'
import { getDescriptionTime } from '../../utils'

import { useTasks } from '../../hooks/useTasks'

import type { ITask } from '../../types'
import styles from './styles.module.scss'

interface ITaskExtra extends ITask {
  hideTimer?: boolean
  hideCheckbox?: boolean
}

function Task({ remainingTime, ...props }: ITaskExtra) {
  const [viewTask, setViewTask] = useState(false)

  const openTask = useTasks((ctx) => ctx.openTask)
  const closeTask = useTasks((ctx) => ctx.closeTask)

  return (
    <>
      {viewTask && <View task={props} onClose={() => setViewTask(false)} />}

      <div className={styles.taskContainer}>
        {!props.hideCheckbox && (
          <CheckBox
            className={styles.checkBox}
            checked={props.status === 'close'}
            onClick={async () => {
              props.status === 'open'
                ? await closeTask(props.id)
                : await openTask(props.id)
            }}
          />
        )}

        <h1 className={styles.timeRemains} onClick={() => setViewTask(true)}>
          {props.hideTimer || !remainingTime ? (
            props.title
          ) : (
            <>
              <ClockTimer remainingTime={remainingTime} />
              <p className={styles.description}>
                {getDescriptionTime(remainingTime)} - {props.title}
              </p>
            </>
          )}
        </h1>
      </div>
    </>
  )
}

export default Task
