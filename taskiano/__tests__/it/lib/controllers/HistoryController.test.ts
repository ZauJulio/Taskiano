import { HistoryController } from '../../../../lib/controllers/HistoryController'
import { HistoryService } from '../../../../lib/services'
import { Repository } from '../../../mocks/Repository'

import { HistorySchema } from '../../../../lib/schemas'
import { IHistory } from '../../../../types'
import { historys, tasks } from '../../../mocks/data'

let controller = new HistoryController({
  service: new HistoryService({
    repo: new Repository<IHistory>({
      ref: null,
      schema: HistorySchema,
      _name: 'History',
      data: historys
    })
  })
})

beforeEach(() => {
  controller = new HistoryController({
    service: new HistoryService({
      repo: new Repository<IHistory>({
        ref: null,
        schema: HistorySchema,
        _name: 'History',
        data: historys
      })
    })
  })
})

describe('controller', () => {
  it('Should update score overdue tasks ', async () => {
    await controller.updateScore({ userId: historys[0].userId, action: 'close', task: tasks[0] })
    const historyOfUser = await controller.getHistoryOfUser(historys[0].userId)

    expect(historyOfUser).toBeDefined()
    expect(historyOfUser.score).toBe(667)
  })

  it('Should update score in time tasks ', async () => {
    await controller.updateScore({ userId: historys[1].userId, action: 'close', task: tasks[1] })
    const historyOfUser = await controller.getHistoryOfUser(historys[1].userId)

    expect(historyOfUser).toBeDefined()
    expect(historyOfUser.score).toBe(668)
  })

  it('Should update last task number', async () => {
    await controller.updateLastTaskNumber({ userId: historys[0].userId, taskNumber: 5 })

    const historyOfUser = await controller.getHistoryOfUser(historys[0].userId)

    expect(historyOfUser).toBeDefined()
    expect(historyOfUser.lastTaskNumber).toBe(5)
  })

  it('Should get last task number', async () => {
    const lastTaskNumber = await controller.getLastTaskNumber(historys[0].userId)

    expect(lastTaskNumber).toBeDefined()
    expect(lastTaskNumber).toBe(4)
  })
})
