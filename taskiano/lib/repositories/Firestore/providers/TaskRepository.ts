import { FireRepository, TaskRef, TaskSchema } from '../../Firestore'
import { ITask } from '../../../../types'

export const TaskRepository = new FireRepository<ITask>({
  ref: TaskRef,
  schema: TaskSchema,
  _name: 'Task'
})
