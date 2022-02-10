import { HistoryService } from '../../../lib/services'
import { Repository } from '../../mocks/Repository'
import { IHistory } from '../../../types'
import { HistorySchema } from '../../../lib/schemas'
import { historys} from '../../mocks/data/historys'

const service = new HistoryService({
  repo: new Repository<IHistory>({
    ref: null,
    schema: HistorySchema,
    _name: 'History',
    data: historys
  })
})

describe('HistoryService unit', () => {
  it('Create a history', async () => {
    const history = await service.create(historys[0])
  
    expect(history).toBeDefined()
    expect(history?.score).toBe(historys[0].score)
  })
  
  it('Get a history', async () => {
    const history = await service.get('6c325307-8ee1-4055-bb38-a4704a272ac2')
  
    expect(history).toBeDefined()
    expect(history?.id).toBe(historys[0].id)
  })
  
  it('Update a history', async () => {
    const history = await service.update(historys[0].id!, {
      score: 1000,
      weekdayTaskCount: {
        mon: 0,
        tue: 0,
        wed: 0,
        thu: 0,
        fri: 0,
        sat: 1,
        sun: 0
      },
      userId: '7fd18545-8054-45f5-9d76-9addd179d13b'
    })
  
    expect(history?.score).toBe(1000)
    expect(history?.weekdayTaskCount.sat).toBe((historys[0].weekdayTaskCount.sat + 1))
  })
  
  it('Delete a history', async () => {
    const historyCreated = await service.create(historys[0])
  
    expect(historyCreated).toBeDefined()
    expect(historyCreated?.score).toBe(historys[0].score)
  
    await service.delete(historyCreated.id!)
  
    const checkHistory = await service.get(historyCreated.id!)
  
    expect(checkHistory).toBeUndefined()
  })

  it('Filter a history', async () => {
    const historyCreated = await service.create(historys[0])
  
    expect(historyCreated).toBeDefined()
    expect(historyCreated?.score).toBe(historys[0].score)

    const filterHistory = await service.filter('weekdayTaskCount', '==', {
      mon: 5,
      tue: 10,
      wed: 15,
      thu: 0,
      fri: 10,
      sat: 0,
      sun: 0,
    })
    
    expect(filterHistory).toBeDefined()
  })
})
  
