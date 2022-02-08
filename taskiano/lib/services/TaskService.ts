import { IRepository, ITask, WhereFilterOp } from "../../types";

interface TaskServiceProps {
  repo: IRepository<ITask>;
}

export class TaskService {
  private repo: IRepository<ITask>;

  constructor(props: TaskServiceProps) {
    this.repo = props.repo;
  }

  private castDate(data?: ITask): ITask {
    return {
      ...data,
      timer: this.repo.castDate(data?.timer),
      created_at: this.repo.castDate(data?.created_at),
      closed_in: this.repo.castDate(data?.closed_in),
    };
  }

  async create(task: ITask) {
    return this.repo.create(task);
  }

  async get(id: string) {
    const data = await this.repo.get(id);

    return !data ? undefined : this.castDate(data);
  }

  async update(id: string, data: Partial<ITask>) {
    return this.castDate(await this.repo.update(id, data));
  }

  async delete(id: string) {
    await this.repo.delete(id);
  }

  async index(userId: string) {
    const data = await this.repo.filter("userId", "==", userId);

    return data.map((task) => this.castDate(task));
  }

  async filter(prop: string, op: WhereFilterOp, value: any) {
    const data = await this.repo.filter(prop, op, value);

    return data.map((task) => this.castDate(task));
  }
}
