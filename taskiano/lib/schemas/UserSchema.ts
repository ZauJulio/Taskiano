import * as Yup from 'yup'

const UserSchema = Yup.object().shape({
  id: Yup.string().required(),
  username: Yup.string().required(),
  avatar: Yup.string().required(),
  birthday: Yup.date(),
  email: Yup.string().required()
})

export default UserSchema
