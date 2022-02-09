import { useContextSelector } from 'use-context-selector';
import { TasksContext, ITasksContext } from '../contexts/TasksContext/Provider';

export function useTasks(selector: (value: ITasksContext) => any) {
  return useContextSelector(TasksContext, selector);
}
