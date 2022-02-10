import { users } from './users'
import { tasks } from './tasks'
import { projects } from './projects'
import { historys } from './historys'

interface Collections {
  [key: string]: any[]
}

export { users, tasks, projects, historys }

const collections: Collections = {
  users,
  tasks,
  projects,
  historys
}

export default collections
