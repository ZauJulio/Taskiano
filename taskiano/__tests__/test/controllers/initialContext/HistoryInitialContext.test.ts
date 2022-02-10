import { getHistoryInitialContext } from '../../../../lib/controllers/InitialContext'

describe('History Initial Context', () => {
  it('should get initialize history context', () => {
    const historyInitalContext = getHistoryInitialContext()
    expect(historyInitalContext).toBeDefined()
    expect(historyInitalContext).toMatchObject({
      userId: '',
      score: 0,
      weekdayTaskCount: {
        mon: 0,
        tue: 0,
        wed: 0,
        thu: 0,
        fri: 0,
        sat: 0,
        sun: 0
      }
    })
  })
})