import { v4 as uuidv4 } from 'uuid'

import { Timestamp } from 'firebase/firestore'
import { SchemaOf } from 'yup'
import { IRepository, IRepositoryConstructor, WhereFilterOp } from '../../types'

interface MockRepositoryProps<T> extends IRepositoryConstructor {
  data: T[]
}

export class Repository<T> implements IRepository<T> {
  ref: any
  schema: SchemaOf<any>
  _name: string
  data: any

  constructor(props: MockRepositoryProps<T>) {
    this.data = props.data
    this.schema = props.schema
    this._name = props._name
  }

  index(_id?: string): Promise<T[]> {
    return this.data
  }

  get(_id?: any): Promise<T | undefined> {
    return Promise.resolve(this.data.find((item: any) => item.id === _id))
  }

  delete(_id?: any): Promise<void> {
    if (!_id) Promise.resolve()

    this.data = this.data.filter((_doc: any) => _doc.id !== _id)

    return Promise.resolve()
  }

  async create(data: T, id?: string): Promise<T> {
    await this.Validator(data)
    let _id = id

    if (id && (await this.get(id))) {
      this.data = this.data.map((_doc: any) =>
        _doc.id === id ? { ...(data as any), id } : _doc
      )
    } else {
      _id = uuidv4()
      this.data.push({ ...(data as any), id: _id })
    }

    return { ...(data as any), id: _id }
  }

  update(_id: any, data: T): Promise<T | undefined> {
    this.data = this.data.filter((_doc: any) => _doc.id !== _id)
    this.data.push({ ...(data as any), id: _id })

    return { ...(data as any), id: _id }
  }

  filter(prop: string, op: WhereFilterOp, value: any): Promise<T[]> {
    throw new Error('Method not implemented.')
  }

  async Validator(data: T) {
    await this.schema.validate(data, {
      abortEarly: false
    })
  }

  castDate(date?: Timestamp | Date | string | null): Date | any {
    if (date instanceof Timestamp) {
      return date.toDate()
    } else if (date) {
      return new Date(date)
    } else {
      return date
    }
  }
}
