import React, { useEffect, useState } from 'react';
import { useWindowSize } from 'use-hooks';

import Carousel from '../../Carousel';
import ProjectWidget from './ProjectWidget';

import { getTasksOfProject } from '../../../utils';
import type { IProject, IProjectTasks } from '../../../types';

interface IProjectsWidgets {
  projects: IProject[];
  tasks: IProjectTasks[];
}

function ProjectsWidget(props: IProjectsWidgets) {
  const { width } = useWindowSize();
  const [who, SetWho] = useState(0);

  useEffect(() => {
    if (width < 720) SetWho(1);
    else if (width < 1560) SetWho(2);
    else SetWho(3);
  }, [width]);

  return (
    <Carousel howMany={who} infiniteScroll>
      {props.projects?.length > 0 &&
        props.projects.map((project, index) => (
          <ProjectWidget
            key={project.id ?? index}
            {...project}
            tasks={getTasksOfProject(props.tasks, project.id)}
          />
        ))}
    </Carousel>
  );
}

export default ProjectsWidget;
