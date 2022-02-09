import { SchemaOf } from "yup";
import { v4 as uuidv4 } from "uuid";

import collections from "./data";

interface IFireController<T> {
  ref: string;
  schema: SchemaOf<any>;
  _name: string;
  _data: any[];
}

class FireController<T> {
  ref: string;
  schema: SchemaOf<any>;
  _name: string;
  _data: any[];

  constructor(props: IFireController<T>) {
    this.ref = props.ref;
    this.schema = props.schema;
    this._name = props._name;
    this._data = props._data;
  }

  public async Validator(data: T, schema: SchemaOf<any> = this.schema) {
    await schema.validate(data, {
      abortEarly: false,
    });
  }

  public async index(): Promise<any[]> {
    return this._data;
  }

  public async get(_id: string): Promise<T | undefined> {
    if (!_id) return;

    return this._data.find((_doc) => _doc.id === _id);
  }

  public async getDocsWithProperty(
    prop: string,
    value: any,
    ref?: string
  ): Promise<any[]> {
    if (!ref) return [];

    const docs = collections[ref];

    return docs.find((_doc) => _doc[prop] === value) ?? ([] as any);
  }

  public async getDocsOfUser(userId?: string): Promise<T[]> {
    if (!userId) return [];

    return this.getDocsWithProperty("userId", userId);
  }

  public async delete(_id: string): Promise<void> {
    if (!_id) return;

    this._data = this._data.filter((_doc) => _doc.id !== _id);
  }

  protected async setDoc(docRef: string, data: T) {
    this._data.push({ id: docRef, ...(data as any) });

    return docRef;
  }

  public async create(data: T, id?: string): Promise<T> {
    await this.Validator(data);
    let _id = id;

    if (id && (await this.get(id))) {
      this._data = this._data.map((_doc) =>
        _doc.id === id ? { ...(data as any), id } : _doc
      );
    } else {
      _id = uuidv4();
      this._data.push({ ...(data as any), id: _id });
    }

    return { ...(data as any), id: _id };
  }

  public async update(_id: string, data: T): Promise<T | undefined> {
    this._data = this._data.filter((_doc) => _doc.id !== _id);
    this._data.push({ ...(data as any), id: _id });

    return { ...(data as any), id: _id };
  }
}

export default FireController;