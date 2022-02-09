import { GlobalController } from '../../../../lib/controllers/GlobalController'
import { Repository } from '../../../mocks/Repository'

import {
  UserService,
  TaskService,
  ProjectService,
  HistoryService
} from '../../../../lib/services'

import {
  ProjectSchema,
  HistorySchema,
  TaskSchema,
  UserSchema
} from '../../../../lib/schemas'

import { projects, historys, tasks, users } from '../../../mocks/data'

import { IHistory, IProject, ITask, IUser } from '../../../../types'

const userRepo = new Repository<IUser>({
  ref: null,
  schema: UserSchema,
  _name: 'User',
  data: users
})

const taskRepo = new Repository<ITask>({
  ref: null,
  schema: TaskSchema,
  _name: 'Task',
  data: tasks
})

const projectRepo = new Repository<IProject>({
  ref: null,
  schema: ProjectSchema,
  _name: 'Project',
  data: projects
})

const historyRepo = new Repository<IHistory>({
  ref: null,
  schema: HistorySchema,
  _name: 'History',
  data: historys
})

const controller = new GlobalController({
  userService: new UserService({ repo: userRepo }),
  taskService: new TaskService({ repo: taskRepo }),
  projectService: new ProjectService({ repo: projectRepo }),
  historyService: new HistoryService({ repo: historyRepo })
})

describe('controller', () => {
  it('Update Last Task Number', async () => {})
})
