import React, { useState } from 'react';

import { BiLeftArrow } from 'react-icons/bi';

import { useProjects } from '../../../hooks/useProjects';

import Task from '../../Task';
import EditorProject from '../../Project/Editor';
import { ClockTimer } from '../../ClockTimer';
import { getDescriptionTime } from '../../../utils';

import type { IProject, ITask } from '../../../types';
import styles from './styles.module.scss';

export interface ITaskProject extends ITask {
  projectName?: string;
  projectColor?: string;
  projectId?: string;
}

interface IProjectList {
  tasks?: ITaskProject[];
}

function ProjectList(props: IProjectList) {
  const [editProject, setEditProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState<IProject>();

  const getProject = useProjects((ctx) => ctx.get);

  const EditorProjectView = () => {
    if (editProject && selectedProject)
      return (
        <EditorProject
          project={selectedProject}
          close={() => setEditProject(false)}
        />
      );

    return null;
  };

  return (
    <>
      <EditorProjectView />

      <table className={styles.tableContent}>
        <thead className={styles.header}>
          <tr className={styles.row}>
            <th className={styles.name}>Nome</th>
            <th className={styles.timer}>Timer</th>
            <th className={styles.priority}>Prioridade</th>
            <th className={styles.createdAt}>Data de criação</th>
            <th className={styles.project}>Projeto</th>
          </tr>
        </thead>

        <tbody className={styles.body}>
          {props.tasks?.map((task) => (
            <tr key={task?.id} className={styles.row}>
              <td className={styles.name}>
                <Task hideTimer key={task?.id} {...task} />
              </td>

              <td className={styles.timer}>
                <ClockTimer remainingTime={task?.remainingTime} />
                {getDescriptionTime(task?.remainingTime)}
              </td>

              <td className={styles.priority}>{task?.priority}</td>

              <td className={styles.createdAt}>
                {new Date(task.created_at ?? '')
                  .toLocaleString('pt-BR')
                  .slice(0, -3)}
              </td>

              <td
                className={styles.project}
                style={{ background: task?.projectColor }}
                onClick={() => {
                  setEditProject(true);
                  setSelectedProject(getProject(task?.projectId));
                }}
              >
                <BiLeftArrow />
                {task?.projectName}
              </td>

              <td className={styles.whiteSpace} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ProjectList;
