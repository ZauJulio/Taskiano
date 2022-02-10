import React from 'react'
import Carousel from '../../Carousel'

import type { ITask } from '../../../types'
import colors from '../../../styles/colors'
import styles from './styles.module.scss'

interface ICarouselActiveTasks {
  currentTasks?: ITask[]
  selectedTask?: ITask
  handleSelectTask: (id?: string) => void
}

function CarouselActiveTasks(props: ICarouselActiveTasks) {
  const isActive = (task: ITask) => {
    return task?.id === props.selectedTask?.id
  }

  return (
    <Carousel howMany={3} infiniteScroll>
      {props.currentTasks?.map((task) => (
        <a
          key={task.id}
          className={styles.taskTag}
          onClick={() =>
            props.handleSelectTask && props.handleSelectTask(task?.id)
          }
          style={{ color: isActive(task) ? colors.white : colors.orange }}
        >
          #{task.number}
        </a>
      ))}
    </Carousel>
  )
}

export default CarouselActiveTasks
