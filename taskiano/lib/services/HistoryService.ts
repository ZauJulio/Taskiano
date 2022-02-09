import { IRepository, IHistory, WhereFilterOp } from '../../types';
import {
  getCurrentWeekday,
  getDaysOfDifference,
  weekdaysList,
} from '../../utils';

interface HistoryServiceProps {
  repo: IRepository<IHistory>;
}

export class HistoryService {
  private repo: IRepository<IHistory>;

  constructor(props: HistoryServiceProps) {
    this.repo = props.repo;
  }

  private castDate(data: IHistory): IHistory {
    return {
      ...data,
      updated_at: this.repo.castDate(data?.updated_at),
    };
  }

  private async resetHistory(_history: IHistory) {
    const diff = getDaysOfDifference(new Date(_history?.updated_at!));

    let weekday = getCurrentWeekday();

    Array.from({ length: diff }, () => {
      _history.weekdayTaskCount[weekday] = 0;
      weekday = weekdaysList[weekdaysList.indexOf(weekday) - 1];
    });

    return this.update(_history?.id!, _history);
  }

  async create(history: IHistory) {
    return this.castDate(await this.repo.create(history));
  }

  async get(id: string): Promise<IHistory | undefined> {
    const doc = await this.repo.get(id);

    return !doc ? undefined : this.castDate(doc);
  }

  async getHistoryOfUser(userId?: string) {
    const docs = await this.filter('userId', '==', userId);

    return (await this.resetHistory(docs[0])) ?? docs[0];
  }

  async update(id: string, data: IHistory) {
    const updatedHistory = await this.repo.update(id, data);

    return !updatedHistory ? undefined : this.castDate(updatedHistory);
  }

  async updateLastTaskNumber(props: { userId?: string; taskNumber?: number }) {
    const doc = await this.getHistoryOfUser(props.userId);

    if (!doc) return;

    await this.update(doc.id!, {
      ...doc,
      lastTaskNumber: props.taskNumber ?? doc.lastTaskNumber,
    });
  }

  async delete(id: string) {
    await this.repo.delete(id);
  }

  async index(userId: string) {
    const historys = await this.repo.filter('userId', '==', userId);

    return historys.map((history) => this.castDate(history));
  }

  async filter(prop: string, op: WhereFilterOp, value: any) {
    const historys = await this.repo.filter(prop, op, value);

    return historys.map((history) => this.castDate(history));
  }
}
