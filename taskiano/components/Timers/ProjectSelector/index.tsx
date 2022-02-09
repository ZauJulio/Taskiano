import React from 'react';

import Selector from '../Selector';

import type { IProject } from '../../../types';
import styles from './styles.module.scss';

interface IProjectSelector {
  handleSelectProject: (n: number) => void;
  currentProjectIndex: number;
  currentProjects: IProject[];
}

function ProjectSelector(props: IProjectSelector) {
  return (
    <div className={styles.projectSelector}>
      <Selector
        textOnEmpty="TIMERS"
        onChange={props.handleSelectProject}
        current={props.currentProjectIndex}
      >
        {props.currentProjects.map((project) => (
          <option className={styles.selectorOption} key={project.id}>
            {project.name}
          </option>
        ))}
      </Selector>
    </div>
  );
}

export default ProjectSelector;
