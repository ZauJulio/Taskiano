import React from 'react';

import ProjectList, { ITaskProject } from './ProjectList';
import { getTasksOfProject } from '../../../utils';

import type { IProject, IProjectTasks } from '../../../types';

interface IProjectsList {
  tasks: IProjectTasks[];
  projects: IProject[];
}

function ProjectsList(props: IProjectsList) {
  var data: ITaskProject[] = [];

  props.projects.forEach((project) => {
    const tasksOfProjects = getTasksOfProject(props.tasks, project.id);

    tasksOfProjects?.forEach((task) => {
      data.push({
        ...task,
        projectName: project.name,
        projectColor: `#${project.color?.toString(16)}`,
        projectId: project.id,
      });
    });
  });

  return <ProjectList tasks={data} />;
}

export default ProjectsList;
