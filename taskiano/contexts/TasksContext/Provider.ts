import { createContext } from 'use-context-selector'
import type { ITask, IProjectTasks } from '../../types'

export interface ITasksContext {
  tasks: IProjectTasks[]
  update: (taskId: string, data: ITask) => Promise<void>
  create: (data: ITask) => Promise<void>
  openTask: (id: string) => Promise<void>
  closeTask: (id: string) => Promise<void>
  deleteTask: (id: string) => Promise<void>
}

export const TasksContext = createContext({} as ITasksContext)
