interface ITask {
  id?: string
  title?: string
  number?: number
  remainingTime?: number
  note?: string
  fixed?: boolean
  priority?: number
  status?: string
  created_at?: Date | null
  closed_in?: Date | null
  timer?: Date | null

  projectId?: string
}

export default ITask
