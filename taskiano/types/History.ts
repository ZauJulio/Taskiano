export interface Weekdays {
  [x: string]: number
  mon: number
  tue: number
  wed: number
  thu: number
  fri: number
  sat: number
  sun: number
}

interface IHistory {
  id?: string
  score: number
  updated_at?: string | Date | null
  weekdayTaskCount: Weekdays
  lastTaskNumber?: number

  userId: string
}

export default IHistory
