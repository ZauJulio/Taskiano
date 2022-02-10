import { HistorySchema } from '../../../lib/schemas/'

describe('history schema', () => {
  it('should validate the history schema', async () => {
    const data = {
      id: '6c325307-8ee1-4055-bb38-a4704a272ac2',
      score: 666,
      updated_at: new Date(new Date().getTime() - 1000 * 60 * 60),
      weekdayTaskCount: {
        mon: 0,
        tue: 0,
        wed: 0,
        thu: 0,
        fri: 0,
        sat: 0,
        sun: 0
      },
      lastTaskNumber: 4,
      userId: '7fd18545-8054-45f5-9d76-9addd179d13b'
    }

    await HistorySchema.validate(data, { abortEarly: false })
  })

  it('should fail to validate history schema', async () => {
    const data = {
      id: '6c325307-8ee1-4055-bb38-a4704a272ac2',
      updated_at: new Date(new Date().getTime() - 1000 * 60 * 60),
      weekdayTaskCount: {
        mon: 0,
        tue: 0,
        wed: 0,
        thu: 0,
        fri: 0,
        sat: 0,
        sun: 0
      },
      lastTaskNumber: 4,
      userId: '7fd18545-8054-45f5-9d76-9addd179d13b'
    }
    try {
      await HistorySchema.validate(data, { abortEarly: false })
    } catch (error: any) {
      expect(error.message).toBe('score is a required field')
    }
  })
})