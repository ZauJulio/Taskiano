import * as Yup from 'yup'

const TaskSchema = Yup.object().shape({
  id: Yup.string(),
  title: Yup.string().required(),
  number: Yup.number().required(),
  remainingTime: Yup.number(),
  note: Yup.string(),
  fixed: Yup.boolean(),
  priority: Yup.number(),
  status: Yup.string().required(),
  created_at: Yup.date().required(),
  closed_in: Yup.date().nullable().default(null),
  timer: Yup.date().nullable().default(null)
})

export default TaskSchema
