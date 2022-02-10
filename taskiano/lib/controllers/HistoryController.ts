import { HistoryService } from '../services'

import { getCurrentWeekday } from '../../utils'

import type { IScoreRules, ITask } from '../../types'

export class HistoryController {
  private score_rules: IScoreRules = {
    task: {
      close: {
        inTime: 2,
        outTime: 1
      },
      open: {
        inTime: -1,
        outTime: -2
      }
    }
  }

  private service: HistoryService

  constructor(props: { service: HistoryService }) {
    this.service = props.service
  }

  async getHistoryOfUser(userId?: string) {
    return this.service.getHistoryOfUser(userId)
  }

  async getLastTaskNumber(userId: string) {
    return (await this.getHistoryOfUser(userId)).lastTaskNumber
  }

  async updateLastTaskNumber(props: { userId?: string; taskNumber?: number }) {
    await this.service.updateLastTaskNumber(props)
  }

  async updateScore(props: { task?: ITask; action: string; userId?: string }) {
    if (!props.task || !props.action || !props.userId) return

    const doc = await this.getHistoryOfUser(props.userId)
    if (!doc) return

    const timer = props.task.timer ?? Infinity
    const currTime = new Date()

    const type = 'task'
    const value = currTime < timer ? 'inTime' : 'outTime'
    const score = doc.score + this.score_rules[type][props.action][value]

    const currentWeekday = getCurrentWeekday()
    const currentTaskCount = doc.weekdayTaskCount[currentWeekday]
    const updated_at = new Date()

    await this.service.update(doc?.id!, {
      ...doc,
      score,
      updated_at,
      weekdayTaskCount: {
        ...doc.weekdayTaskCount,
        [currentWeekday]:
          props.action === 'close' ? currentTaskCount + 1 : currentTaskCount - 1
      }
    })
  }
}
