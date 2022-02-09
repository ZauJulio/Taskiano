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
})
