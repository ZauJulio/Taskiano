import { getTasksInitalContext } from '../../../../lib/controllers/InitialContext'

describe('Tasks Initial Context', () => {
  it('should get initialize tasks context', () => {
    const tasksInitalContext = getTasksInitalContext()
    expect(tasksInitalContext).toBeDefined()
    expect(typeof tasksInitalContext[0]).toBe('object')
    expect(typeof tasksInitalContext[0]).toBe('object')
    expect(tasksInitalContext.length).toBe(2)
  })
})