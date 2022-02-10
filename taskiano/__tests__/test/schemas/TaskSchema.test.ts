import { TaskSchema } from '../../../lib/schemas/'

describe('task schema', () => {
  it('should validate the task schema', async () => {
    const data = {
      id: '32a9b0cd-e311-433d-833b-5853cedffc30',
      title: 'Tarefa 666: Welcome to the Hell',
      number: 666,
      remainingTime: 696969,
      note: '# Hello Luci',
      fixed: false,
      priority: 6,
      status: 'open',
      created_at: new Date(),
      closed_in: null,
      timer: new Date(new Date().getTime() + 666),
      projectId: 'abef7153-742f-4b20-bb42-ae772053050b'
    }

    await TaskSchema.validate(data, { abortEarly: false })
  })

  it('should fail to validate project schema', async () => {
    const data = {
      id: '32a9b0cd-e311-433d-833b-5853cedffc30',       
      number: 666,
      remainingTime: 696969,
      note: '# Hello Luci',
      fixed: false,
      priority: 6,
      status: 'open',
      created_at: new Date(),
      closed_in: null,
      timer: new Date(new Date().getTime() + 666),
      projectId: 'abef7153-742f-4b20-bb42-ae772053050b'
    }
    try {
      await TaskSchema.validate(data, { abortEarly: false })
    } catch (error: any) {
      expect(error.message).toBe('title is a required field')
    }
  })
})