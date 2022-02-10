import { ProjectService } from '../../../lib/services'
import { Repository } from '../../mocks/Repository'
import { IProject } from '../../../types'
import { ProjectSchema } from '../../../lib/schemas'
import { projects } from '../../mocks/data/projects'


const service = new ProjectService({
  repo: new Repository<IProject>({
    ref: null,
    schema: ProjectSchema,
    _name: 'Project',
    data: projects
  })
})

describe('ProjectService unit', () => {
  it('Create a project', async () => {
    const project = await service.create(projects[0])

    expect(project).toBeDefined()
    expect(project?.name).toBe(projects[0].name)
  })

  it('Get a project', async () => {
    const project = await service.get('abef7153-742f-4b20-bb42-ae772053050b')

    expect(project).toBeDefined()
    expect(project?.id).toBe(projects[0].id)
  })

  it('Update a project', async () => {
    const project = await service.update(projects[0].id!, {
      name: 'Projeto teste de software com TDD',
      description: 'Projeto criado com o objetivo de aplicar as técnicas de TDD aprendidas na disciplina'
    })

    expect(project?.name).toBe('Projeto teste de software com TDD')
    expect(project?.description).toBe(
      'Projeto criado com o objetivo de aplicar as técnicas de TDD aprendidas na disciplina'
    )
  })

  it('Delete Project', async () => {
    const createProject = await service.create(projects[0])

    expect(createProject).toBeDefined()
    expect(createProject?.name).toBe(projects[0].name)

    await service.delete(createProject.id!)

    const checkProject = await service.get(createProject.id!)

    expect(checkProject).toBeUndefined()
  })

  it('Archived Project', async () => {
    const createProject = await service.create(projects[0])
    
    expect(createProject).toBeDefined()
    expect(createProject?.name).toBe(projects[0].name)

    await service.setArchived(createProject.id!, true)

    const checkProject = await service.get(createProject.id!)

    expect(checkProject).toBeDefined()

    expect(checkProject?.hasArchived).toBe(true)
  })
})