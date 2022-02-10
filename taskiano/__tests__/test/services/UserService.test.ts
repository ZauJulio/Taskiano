import { UserService } from '../../../lib/services'
import { Repository } from '../../mocks/Repository'
import { IUser } from '../../../types'
import { UserSchema } from '../../../lib/schemas'
import { users } from '../../mocks/data/users'


const service = new UserService({
  repo: new Repository<IUser>({
    ref: null,
    schema: UserSchema,
    _name: 'User',
    data: users
  })
})


describe('UserService unit', () => {
  it('Should create a user', async () => {
    const user = await service.create({
      id: '7fd18545-8054-45f5-9d76-9addd179d13b',
      username: 'taciano',
      avatar: 'https://github.com/tacianosilva.png',
      email: 'taciano.silva@ufrn.br'
    }, '7fd18545-8054-45f5-9d76-9addd179d13b')

    expect(user).toBeDefined()
    expect(user?.id).toBe(users[0].id)
  })

  it('Should get a user', async () => {
    const user = await service.get('7fd18545-8054-45f5-9d76-9addd179d13b')

    expect(user).toBeDefined()
    expect(user?.id).toBe(users[0].id)
  })

  it('Should delete a user', async () => {
    const user = await service.delete('7fd18545-8054-45f5-9d76-9addd179d13b')

    expect(user).toBeFalsy()
  })
})
