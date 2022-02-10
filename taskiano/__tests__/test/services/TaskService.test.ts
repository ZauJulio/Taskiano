import { TaskService } from '../../../lib/services'
import { Repository } from '../../mocks/Repository'
import { ITask } from '../../../types'
import { TaskSchema } from '../../../lib/schemas'
import { tasks } from '../../mocks/data/tasks'


const service = new TaskService({
  repo: new Repository<ITask>({
    ref: null,
    schema: TaskSchema,
    _name: 'Task',
    data: tasks
  })
})

describe('TaskService unit', () => {
  it('Create a task', async () => {
    const task = await service.create(tasks[0])

    expect(task).toBeDefined()
    expect(task?.title).toBe(tasks[0].title)
  })

  it('Get a task', async () => {
    const task = await service.get('32a9b0cd-e311-433d-833b-5853cedffc30')

    expect(task).toBeDefined()
    expect(task?.id).toBe(tasks[0].id)
  })

  it('Update a task', async () => {
    const task = await service.update(tasks[0].id!, {
      title: 'Tarefa 666: Welcome to the Hell with the TDD practice',
      note: '# Hello Lucci your motherfuckerr'
    })

    expect(task?.title).toBe('Tarefa 666: Welcome to the Hell with the TDD practice')
    expect(task?.note).toBe('# Hello Lucci your motherfuckerr')
  })

  it('Delete a task', async () => {
    const createTask = await service.create(tasks[0])

    expect(createTask).toBeDefined()
    expect(createTask?.title).toBe(tasks[0].title)

    await service.delete(createTask.id!)

    const checkTask = await service.get(createTask.id!)

    expect(checkTask).toBeUndefined()
  })
})