import { TaskController } from '../../../../lib/controllers/TaskController'
import { TaskService } from '../../../../lib/services'
import { Repository } from '../../../mocks/Repository'

import { TaskSchema } from '../../../../lib/schemas'
import { ITask } from '../../../../types'
import { tasks } from '../../../mocks/data'

const controller = new TaskController({
  service: new TaskService({
    repo: new Repository<ITask>({
      ref: null,
      schema: TaskSchema,
      _name: 'Task',
      data: tasks
    })
  })
})

describe('TaskController', () => {
  it('Should get task', async () => {
    const user = await controller.get(tasks[0].id!)

    expect(user).toBeDefined()
    expect(user?.id).toBe(tasks[0].id)
  })

  it('Create new Task', async () => {
    const newTask = await controller.create(tasks[0])

    expect(newTask).toBeTruthy()

    if (newTask.id) {
      const checkTask = await controller.get(newTask.id)

      expect(checkTask?.id).toBe(newTask.id)
    }
  })

  it('Read Task', async () => {
    const newTask = await controller.create(tasks[0])

    expect(newTask).toBeTruthy()

    const checkTask = await controller.get(newTask.id!)

    expect(checkTask?.id).toBe(newTask.id)
  })

  it('Update Task', async () => {
    const newTask = await controller.create(tasks[0])

    expect(newTask).toBeTruthy()

    await controller.update(newTask.id!, {
      title: 'Tarefa 777: Welcome to haven'
    })

    const updatedTask = await controller.get(newTask.id!)

    expect(updatedTask?.title).toBe('Tarefa 777: Welcome to haven')
  })

  it('Delete Task', async () => {
    const newTask = await controller.create(tasks[0])

    expect(newTask).toBeTruthy()

    await controller.delete(newTask.id!)

    const deletedTask = await controller.get(newTask.id!)

    expect(deletedTask).toBeFalsy()
  })

  it('Close Task', async () => {
    const newTask = await controller.create(tasks[0])

    expect(newTask).toBeTruthy()

    await controller.setStatus(newTask.id!, 'close')

    const closedTask = await controller.get(newTask.id!)

    expect(closedTask?.status).toBe('close')
  })

  it('Open Task', async () => {
    const newTask = await controller.create(tasks[0])

    expect(newTask).toBeTruthy()

    await controller.setStatus(newTask.id!, 'open')

    const openedTask = await controller.get(newTask.id!)

    expect(openedTask?.status).toBe('open')
  })
})
