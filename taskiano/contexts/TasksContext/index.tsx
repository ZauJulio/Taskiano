import { ReactNode, useCallback, useState, useEffect } from 'react';

import { TasksContext } from './Provider';

import { HistoryController, TaskController } from '../../lib';
import { useAuth, useHistory, useProjects } from '../../hooks';
import { calcRemainingTime } from '../../utils';

import type { IProject, ITask, IProjectTasks } from '../../types';

interface ITasksContextProvider {
  children: ReactNode;
}

const insertRemainingTime = (task: ITask) => {
  return task.remainingTime
    ? task
    : { ...task, remainingTime: calcRemainingTime(task.timer) };
};

export function TasksContextProvider(props: ITasksContextProvider) {
  const [tasks, setTasks] = useState<IProjectTasks[]>([]);

  const projects = useProjects((ctx) => ctx.projects);
  const updateTaskCount = useHistory((ctx) => ctx.updateTaskCount);
  const user = useAuth((ctx) => ctx.user);
  const authenticated = useAuth((ctx) => ctx.authenticated);

  const fetchTasks = useCallback(async () => {
    setTasks([]);

    projects.forEach(async (project: IProject) => {
      if (!project.id) return;

      let _tasks = await TaskController.getTasks(project.id);
      _tasks = _tasks?.map((task) => insertRemainingTime(task));

      setTasks((prev) => [...prev, { projectId: project.id!, tasks: _tasks }]);
    });
  }, [projects]);

  const insertTask = useCallback((task: ITask) => {
    const { projectId } = task;
    const newTasks = insertRemainingTime(task);

    setTasks((prev) =>
      prev.map((t) =>
        t.projectId === projectId
          ? { projectId: t.projectId, tasks: [...t.tasks, newTasks] }
          : t
      )
    );
  }, []);

  const updateTask = useCallback((task: ITask) => {
    const { projectId, id: taskId } = task;
    const updatedTask = insertRemainingTime(task);

    setTasks((prev) =>
      prev.map((t) =>
        t.projectId === projectId
          ? {
            projectId: t.projectId,
            tasks: t.tasks.map((_tasks) =>
              _tasks.id === taskId ? updatedTask : _tasks
            ),
          }
          : t
      )
    );
  }, []);

  const create = useCallback(
    async (data: ITask) => {
      const latestTaskNumber = await HistoryController.getLastTaskNumber(
        user.id
      );

      if (latestTaskNumber) {
        const task = await TaskController.create({
          ...data,
          number: latestTaskNumber + 1,
        });

        await HistoryController.updateLastTaskNumber({
          userId: user.id,
          taskNumber: latestTaskNumber + 1,
        });

        insertTask(task);
      }
    },
    [insertTask, user]
  );

  const update = useCallback(
    async (id: string, data: ITask) => {
      const task = await TaskController.update(id, data);
      task && updateTask(task);
    },
    [updateTask]
  );

  const openCloseTask = useCallback(
    async (id: string, opt: 'open' | 'close') => {
      const task = await TaskController.setStatus(id, opt);

      task && updateTask(task);
      await updateTaskCount(task, opt);
    },
    [updateTaskCount, updateTask]
  );

  // OBS: avaliar atualização de score em delete
  const deleteTask = useCallback(
    async (id: string) => {
      await TaskController.delete(id);

      setTasks((prev) =>
        prev.map((t) => ({
          projectId: t.projectId,
          tasks: t.tasks.filter((task) => task.id !== id),
        }))
      );

      await updateTaskCount();
    },
    [updateTaskCount]
  );

  // Auto update tasks when project is updated
  useEffect(() => {
    authenticated && fetchTasks();
  }, [projects, authenticated, fetchTasks]);

  // Auto update tasks every 2 minute since last update
  useEffect(() => {
    return () =>
      clearTimeout(setTimeout(() => authenticated && fetchTasks(), 120000));
  }, [tasks, authenticated, fetchTasks]);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        update,
        create,
        openTask: (id: string) => openCloseTask(id, 'open'),
        closeTask: (id: string) => openCloseTask(id, 'close'),
        deleteTask,
      }}
    >
      {props.children}
    </TasksContext.Provider>
  );
}
