import { ProjectController } from '../../../../lib/controllers/ProjectController'
import { ProjectService } from '../../../../lib/services'
import { Repository } from '../../../mocks/Repository'

import { ProjectSchema } from '../../../../lib/schemas'
import { IProject } from '../../../../types'
import { projects } from '../../../mocks/data'

const controller = new ProjectController({
  service: new ProjectService({
    repo: new Repository<IProject>({
      ref: null,
      schema: ProjectSchema,
      _name: 'Project',
      data: projects
    })
  })
})

describe('controller', () => {
  it('New Project', async () => {
    const newProject = await controller.create(projects[0])

    expect(newProject).toBeTruthy()

    const checkProject = await controller.get(newProject.id!)

    expect(checkProject?.id).toBe(newProject.id)
  })

  it('Update Project', async () => {
    const createProject = await controller.create(projects[0])

    expect(createProject).toBeTruthy()

    const updatedProject = await controller.update(createProject.id!, {
      name: 'Projeto teste de software com TDD',
      description:
        'Projeto criado com o objetivo de aplicar as técnicas de TDD aprendidas na disciplina'
    })

    expect(updatedProject?.name).toBe('Projeto teste de software com TDD')
    expect(updatedProject?.description).toBe(
      'Projeto criado com o objetivo de aplicar as técnicas de TDD aprendidas na disciplina'
    )
  })

  it('Delete Project', async () => {
    const createProject = await controller.create(projects[0])

    expect(createProject).toBeTruthy()

    await controller.delete(createProject.id!)

    const checkProject = await controller.get(createProject.id!)

    expect(checkProject).toBeFalsy()
  })

  it('Archived Project', async () => {
    const createProject = await controller.create(projects[0])

    expect(createProject).toBeTruthy()

    await controller.setArchived(createProject.id!, true)

    const checkProject = await controller.get(createProject.id!)

    expect(checkProject).toBeTruthy()

    expect(checkProject?.hasArchived).toBeTruthy()
  })

  it('Filter Project:userId', async () => {
    const project = await controller.filter(
      'userId',
      '==',
      '7fd18545-8054-45f5-9d76-9addd179d13b'
    )
    const { length } = project

    expect(length).toBeGreaterThanOrEqual(1)

    project.forEach((p) =>
      expect(p.userId).toBe('7fd18545-8054-45f5-9d76-9addd179d13b')
    )
  })

  it('Filter Project:hasArchived', async () => {
    const project = await controller.filter('hasArchived', '==', false)
    const { length } = project

    expect(length).toBeGreaterThanOrEqual(1)

    project.forEach((p) => {
      expect(p.hasArchived).toBeFalsy()
    })
  })
})
