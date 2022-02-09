import { useContextSelector } from 'use-context-selector';
import {
  ProjectsContext,
  IProjectsContext,
} from '../contexts/ProjectsContext/Provider';

export function useProjects(selector: (value: IProjectsContext) => any) {
  return useContextSelector(ProjectsContext, selector);
}
