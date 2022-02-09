import React, { memo } from 'react'
import { FaTimes } from 'react-icons/fa'
import { GiAlarmClock } from 'react-icons/gi'
import { MdDone } from 'react-icons/md'

import colors from '../../../../styles/colors'
import styles from './styles.module.scss'

interface IProjectStatus {
  over: number
  timers: number
  done: number
  color?: string
}

function ProjectStatusFC(props: IProjectStatus) {
  const color = props.color || colors.highPurple

  return (
    <div
      className={styles.projectStatusContainer}
      style={{ backgroundColor: color }}
    >
      <div className={styles.statusTasks}>
        <p>{props.over}</p>
        <div className={styles.icon}>
          <FaTimes color={color} />
        </div>
      </div>

      <div className={styles.statusTasks}>
        <p>{props.timers}</p>
        <div className={styles.icon}>
          <GiAlarmClock color={color} />
        </div>
      </div>

      <div className={styles.statusTasks}>
        <p>{props.done}</p>
        <div className={styles.icon}>
          <MdDone color={color} />
        </div>
      </div>
    </div>
  )
}

const ProjectStatus = memo(ProjectStatusFC)

export default ProjectStatus
