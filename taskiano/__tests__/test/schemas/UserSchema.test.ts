import {
  UserSchema
} from '../../../lib/schemas'

describe('user schema', () => {
  it('should validate the user schema', async () => {
    const data = {
      id: '7fd18545-8054-45f5-9d76-9addd179d13b',
      username: 'taciano',
      avatar: 'https://github.com/tacianosilva.png',
      email: 'taciano.silva@ufrn.br'
    }

    const schema = await UserSchema.validate(data, { abortEarly: false })

    expect(schema).toBeDefined()
  })

  it('should fail to validate user schema', async () => {
    const data = {
      id: '7fd18545-8054-45f5-9d76-9addd179d13b',
      avatar: 'https://github.com/tacianosilva.png',
      email: 'taciano.silva@ufrn.br'
    }
    try {
      await UserSchema.validate(data, { abortEarly: false })
    } catch (error: any) {
      expect(error.message).toBe('username is a required field')
    }

  })
})
