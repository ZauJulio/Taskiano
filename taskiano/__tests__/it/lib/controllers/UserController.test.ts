import { UserController } from '../../../../lib/controllers/UserController'
import { UserService } from '../../../../lib/services'
import { Repository } from '../../../mocks/Repository'

import { UserSchema } from '../../../../lib/schemas'
import { IUser } from '../../../../types'
import { users } from '../../../mocks/data'

const controller = new UserController({
  service: new UserService({
    repo: new Repository<IUser>({
      ref: null,
      schema: UserSchema,
      _name: 'User',
      data: users
    })
  })
})

describe('UserController', () => {
  it('Should get user', async () => {
    const user = await controller.get(users[0].id!)

    expect(user).toBeDefined()
    expect(user?.id).toBe(users[0].id)
  })

  it('Should assemble user', async () => {
    const user = controller.assembleUser({
      displayName: users[0].username!,
      email: users[0].email!,
      phoneNumber: null,
      photoURL: users[0].avatar!,
      providerId: 'google',
      uid: users[0].id!
    })

    expect(user).toBeDefined()
    expect(user).toStrictEqual(users[0])
  })
})
