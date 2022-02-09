import { getProjectsInitalContext } from './InitialContext'
import { ProjectService } from './../services'

import type { IProject, WhereFilterOp } from '../../types'

export class ProjectController {
  private service: ProjectService

  constructor(props: { service: ProjectService }) {
    this.service = props.service
  }

  async init(userId: string) {
    const projects: IProject[] = []

    getProjectsInitalContext().forEach(async (project) => {
      const _project = await this.create({ ...project, userId })

      projects.push(_project)
    })

    return projects
  }

  async get(id: string) {
    return this.service.get(id)
  }

  async getProjects(userId: string) {
    return this.service.filter('userId', '==', userId)
  }

  async create(data: IProject) {
    return this.service.create(data)
  }

  async update(id: string, data: IProject) {
    return this.service.update(id, data)
  }

  async delete(id: string) {
    await this.service.delete(id)
  }

  async setArchived(id: string, hasArchived: boolean) {
    const project = await this.get(id)

    project && (await this.service.update(id, { ...project, hasArchived }))
  }

  async filter(field: string, operator: WhereFilterOp, value: any) {
    return this.service.filter(field, operator, value)
  }
}
