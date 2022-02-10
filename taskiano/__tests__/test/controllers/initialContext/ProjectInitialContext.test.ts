import { getProjectsInitalContext } from '../../../../lib/controllers/InitialContext'

describe('Projects Initial Context', () => {
  it('should get initialize projects context', () => {
    const projectsInitalContext = getProjectsInitalContext()
    expect(projectsInitalContext).toBeDefined()
    expect(typeof projectsInitalContext[0]).toBe('object')
    expect(typeof projectsInitalContext[0]).toBe('string')
    expect(projectsInitalContext.length).toBe(2)
  })
})