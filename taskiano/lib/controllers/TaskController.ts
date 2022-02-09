import { TaskRepository } from './../repositories';
import { TaskService } from '../services';

import type { ITask } from '../../types';

export class TaskController {
  private service: TaskService;

  constructor(props: { service: TaskService }) {
    this.service = props.service;
  }

  async create(task: ITask) {
    return this.service.create(task);
  }

  async get(id: string) {
    return this.service.get(id);
  }

  async getTasks(projectId: string) {
    return this.service.filter('projectId', '==', projectId);
  }

  async update(id: string, data: Partial<ITask>) {
    return this.service.update(id, data);
  }

  async delete(id: string) {
    await this.service.delete(id);
  }

  async setStatus(id: string, newStatus: 'open' | 'close') {
    const data = await this.service.get(id);

    if (data && data.status !== newStatus) {
      return this.service.update(id, {
        ...data,
        status: newStatus,
        closed_in: newStatus === 'close' ? new Date() : null,
      });
    }
  }
}

const instance = new TaskController({
  service: new TaskService({
    repo: TaskRepository,
  }),
});

export default instance;
