import { createContext } from 'use-context-selector'
import type { IProject } from '../../types'

export interface IProjectsContext {
  projects: IProject[]
  get: (id?: string) => IProject | undefined
  create: (data: IProject) => Promise<void>
  update: (id: string, data: IProject) => Promise<void>
  deleteProject: (id: string) => Promise<void>
  archive: (id: string) => Promise<void>
  unArchive: (id: string) => Promise<void>
  getProjectColor: (id: string) => void
}

export const ProjectsContext = createContext({} as IProjectsContext)
