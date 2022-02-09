import * as Yup from 'yup'

const ProjectSchema = Yup.object().shape({
  id: Yup.string(),
  name: Yup.string().required(),
  created_at: Yup.date().required(),
  closed_in: Yup.date().nullable().default(null),
  description: Yup.string().required(),
  color: Yup.string().required(),
  hasArchived: Yup.boolean(),
  tasks: Yup.array().of(Yup.string())
})

export default ProjectSchema
