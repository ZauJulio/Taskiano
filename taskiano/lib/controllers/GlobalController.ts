import {
  UserService,
  TaskService,
  ProjectService,
  HistoryService
} from '../services'

import {
  getHistoryInitialContext,
  getProjectsInitalContext,
  getTasksInitalContext
} from './InitialContext'

import type { IProject, IUser } from '../../types'

interface GlobalControllerProps {
  userService: UserService
  taskService: TaskService
  projectService: ProjectService
  historyService: HistoryService
}

export class GlobalController implements GlobalControllerProps {
  userService: UserService
  taskService: TaskService
  projectService: ProjectService
  historyService: HistoryService

  constructor(props: GlobalControllerProps) {
    this.userService = props.userService
    this.taskService = props.taskService
    this.projectService = props.projectService
    this.historyService = props.historyService
  }

  async createUserRecord(user: IUser) {
    const userRecord = await this.userService.create(user, user.id)

    await this.initHistory(user.id!)

    const projects = await this.initProjects(user.id!)

    await this.initTasks(projects)

    return userRecord
  }

  async deleteUserRecord(userId: string) {
    await this.deleteUserHistory(userId)

    const projects = await this.getUserProjects(userId)

    // Delete all tasks
    await Promise.all(
      projects.map(async (project) => {
        if (project.id) return this.deleteProjectTasks(project.id)
      })
    )

    // Delete all projects
    await Promise.all(
      projects.map(async (project) => {
        if (project.id) return this.projectService.delete(project.id)
      })
    )

    await this.userService.delete(userId)
  }

  async getUserProjects(userId: string) {
    return this.projectService.filter('userId', '==', userId)
  }

  async deleteUserHistory(userId: string) {
    const history = (
      await this.historyService.filter('userId', '==', userId)
    )[0]

    history.id && (await this.historyService.delete(history.id))
  }

  async deleteProjectTasks(projectId: string) {
    const tasks = await this.taskService.filter('projectId', '==', projectId)

    const delPromises = tasks.map(async (task) => {
      await this.taskService.delete(task.id!)
    })

    return Promise.all(delPromises)
  }

  async initHistory(userId: string) {
    return this.historyService.create({
      ...getHistoryInitialContext(),
      userId
    })
  }

  async initProjects(userId: string) {
    const projects = getProjectsInitalContext().map(async (project) => {
      return this.projectService.create({
        ...project,
        userId
      })
    })

    return Promise.all(projects)
  }

  async initTasks(projects: IProject[]) {
    return getTasksInitalContext().forEach(async (ctx) => {
      const projectId = projects.find(
        (project) => project.name === ctx.projectName
      )?.id

      ctx.tasks.forEach(async (task) => {
        await this.taskService.create({ ...task, projectId })
      })
    })
  }
}
