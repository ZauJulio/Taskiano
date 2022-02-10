import { HistoryController } from '../../../../lib/controllers/HistoryController'
import { HistoryService } from '../../../../lib/services'
import { Repository } from '../../../mocks/Repository'

import { HistorySchema } from '../../../../lib/schemas'
import { IHistory } from '../../../../types'
import { historys } from '../../../mocks/data'

const controller = new HistoryController({
  service: new HistoryService({
    repo: new Repository<IHistory>({
      ref: null,
      schema: HistorySchema,
      _name: 'History',
      data: historys
    })
  })
})
/////////////////////////////////////////
// Filter não implementado
////////////////////////////////////////

describe('controller', () => {
  it('Update Last Task Number', async () => {
    // const history = await controller.updateLastTaskNumber({ userId: historys[0].userId, taskNumber: 5 })
    // console.log("aaaaaaaaaaaaa", history)
    // expect(history).toBeDefined()
  })
})
