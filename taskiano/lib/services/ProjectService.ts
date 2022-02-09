import { IRepository, IProject, WhereFilterOp } from '../../types';

interface ProjectServiceProps {
  repo: IRepository<IProject>;
}

export class ProjectService {
  private repo: IRepository<IProject>;

  constructor(props: ProjectServiceProps) {
    this.repo = props.repo;
  }

  private castDate(data?: IProject): IProject {
    return {
      ...data,
      created_at: this.repo.castDate(data?.created_at),
      closed_in: this.repo.castDate(data?.closed_in),
    };
  }

  async setArchived(id: string, hasArchived: boolean) {
    const data = await this.get(id);

    data && (await this.update(id, { ...data, hasArchived }));
  }

  async create(project: IProject) {
    return this.repo.create(project);
  }

  async get(id: string) {
    const doc = await this.repo.get(id);

    return !doc ? undefined : this.castDate(doc);
  }

  async update(id: string, data: IProject) {
    return this.castDate(await this.repo.update(id, data));
  }

  async delete(id: string) {
    await this.repo.delete(id);
  }

  async index(userId: string) {
    const data = await this.repo.filter('userId', '==', userId);

    return data.map((project) => this.castDate(project));
  }

  async filter(field: string, op: WhereFilterOp, value: any) {
    const data = await this.repo.filter(field, op, value);

    return data.map((project) => this.castDate(project));
  }
}
