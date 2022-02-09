import { IRepository, IUser } from '../../types'

interface UserServiceProps {
  repo: IRepository<IUser>
}

export class UserService {
  private repo: IRepository<IUser>

  constructor(props: UserServiceProps) {
    this.repo = props.repo
  }

  async create(user: IUser, id?: string) {
    return this.repo.create(user, id)
  }

  async get(id: string) {
    return this.repo.get(id)
  }

  async delete(id: string) {
    return this.repo.delete(id)
  }
}
