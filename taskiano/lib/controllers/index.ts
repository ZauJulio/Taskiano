import { GlobalController } from './GlobalController'
import { HistoryController } from './HistoryController'
import { ProjectController } from './ProjectController'
import { TaskController } from './TaskController'
import { UserController } from './UserController'

import {
  HistoryRepository,
  ProjectRepository,
  TaskRepository,
  UserRepository
} from '../repositories'

import {
  HistoryService,
  ProjectService,
  TaskService,
  UserService
} from '../services'

const instUserController = new UserController({
  service: new UserService({
    repo: UserRepository
  })
})

const instTaskController = new TaskController({
  service: new TaskService({
    repo: TaskRepository
  })
})

const instProjectController = new ProjectController({
  service: new ProjectService({
    repo: ProjectRepository
  })
})

const instHistoryController = new HistoryController({
  service: new HistoryService({
    repo: HistoryRepository
  })
})

const instGlobalController = new GlobalController({
  userService: new UserService({ repo: UserRepository }),
  taskService: new TaskService({ repo: TaskRepository }),
  projectService: new ProjectService({ repo: ProjectRepository }),
  historyService: new HistoryService({ repo: HistoryRepository })
})

export {
  instUserController as UserController,
  instTaskController as TaskController,
  instProjectController as ProjectController,
  instHistoryController as HistoryController,
  instGlobalController as GlobalController
}
