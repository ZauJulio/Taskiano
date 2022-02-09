import React, { useState } from 'react';

import Task from '../../Task';
import EditorProject from '../Editor';
import CreateTask from '../../Task/Create';
import ProjectStatus from './ProjectStatus';

import { useProjects } from '../../../hooks/useProjects';

import {
  countTasksDone,
  countTasksOverTime,
  countTasksTimers,
} from '../../../utils';

import type { IProject, ITask } from '../../../types';

import styles from './styles.module.scss';

interface IProjectWidget {
  id?: string;
  color?: number;
  name?: string;
  tasks?: ITask[];
}

function ProjectWidget(props: IProjectWidget) {
  const [addTask, setAddTask] = useState(false);
  const [editProject, setEditProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState<IProject>();

  const getProject = useProjects((ctx) => ctx.get);
  const colorHex = `#${props.color?.toString(16)}`;

  const getTitle = () => {
    if (props.tasks?.length) {
      return `${props.tasks.length} Tarefa${props.tasks.length > 1 ? 's' : ''}`;
    } else return 'Tudo Feito';
  };

  const handleOnClickTitle = () => {
    setEditProject(true);
    setSelectedProject(getProject(props.id));
  };

  return (
    <>
      {addTask && (
        <CreateTask
          projectId={props.id}
          projectColor={colorHex}
          close={() => setAddTask(false)}
        />
      )}

      {editProject && (
        <EditorProject
          project={selectedProject}
          close={() => setEditProject(false)}
        />
      )}

      <div className={styles.projectWidget}>
        <h1
          className={styles.projectTitle}
          style={{ color: colorHex }}
          onClick={handleOnClickTitle}
        >
          {props.name}
        </h1>

        <div className={styles.projectContainer}>
          <div className={styles.projectHeader}>
            <h1 className={styles.totalTasks}>{getTitle()}</h1>
            <ProjectStatus
              over={countTasksOverTime(props.tasks)}
              timers={countTasksTimers(props.tasks)}
              done={countTasksDone(props.tasks)}
              color={colorHex}
            />
          </div>

          <button
            type="button"
            className={styles.addTask}
            onClick={() => setAddTask(true)}
          >
            +
          </button>

          <div className={styles.tasksContainer}>
            {props.tasks?.map((task, index) => (
              <Task {...task} key={task.id ?? index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectWidget;
