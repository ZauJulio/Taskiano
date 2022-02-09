import { FireRepository, UserRef, UserSchema } from '../../Firestore'
import { IUser } from '../../../../types'

export const UserRepository = new FireRepository<IUser>({
  ref: UserRef,
  schema: UserSchema,
  _name: 'User'
})
