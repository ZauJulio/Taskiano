import { createContext } from 'use-context-selector'
import type { IHistory, ITask, IWeekday } from '../../types'

export interface IHistoryContext {
  history?: IHistory
  weekdays?: IWeekday[]
  updateTaskCount: (task: ITask, action: 'open' | 'close') => Promise<void>
}

export const HistoryContext = createContext({} as IHistoryContext)
