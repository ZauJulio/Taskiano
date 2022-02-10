import { Timestamp } from 'firebase/firestore'
import { SchemaOf } from 'yup'

export interface IRepositoryConstructor {
  ref: any
  schema: SchemaOf<any>
  _name: string
}

export type WhereFilterOp =
  | '<'
  | '<='
  | '=='
  | '!='
  | '>='
  | '>'
  | 'array-contains'
  | 'in'
  | 'array-contains-any'
  | 'not-in'

export interface IRepository<T> {
  index(_id: string): Promise<T[]>
  get(_id: any): Promise<T | undefined>
  delete(_id: any): Promise<void>
  create(data: T, id?: string): Promise<T>
  update(_id: any, data: T): Promise<T | undefined>
  filter(prop: string, op: WhereFilterOp, value: any): Promise<T[]>
  Validator(data: T, schema?: SchemaOf<any>): Promise<void>
  castDate(date?: Timestamp | Date | string | null): Date | null | undefined
}
