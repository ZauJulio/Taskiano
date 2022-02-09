import {
  doc,
  where,
  query,
  addDoc,
  getDoc,
  setDoc,
  getDocs,
  Timestamp,
  deleteDoc,
  updateDoc,
  DocumentData,
  CollectionReference,
  DocumentReference,
} from 'firebase/firestore';

import { SchemaOf } from 'yup';

import {
  IRepository,
  IRepositoryConstructor,
  WhereFilterOp,
} from '../../../../types';

export interface FireRepositoryProps extends IRepositoryConstructor {
  ref: CollectionReference<DocumentData>;
}

export class FireRepository<T> implements IRepository<T> {
  ref: FireRepositoryProps['ref'];
  schema: SchemaOf<any>;
  _name: string;

  constructor(props: FireRepositoryProps) {
    this.ref = props.ref;
    this.schema = props.schema;
    this._name = props._name;
  }

  async index(userId: string): Promise<T[]> {
    return !userId ? [] : this.filter('userId', '==', userId);
  }

  async get(_id: any): Promise<T | undefined> {
    if (!_id) return;

    const docRef = doc(this.ref, _id);
    const docSnap = await getDoc(docRef);

    return docSnap.exists()
      ? { ...(docSnap.data() as T), id: docRef.id }
      : undefined;
  }

  async delete(_id: any): Promise<void> {
    if (!_id) return;

    await deleteDoc(doc(this.ref, _id));
  }

  async create(data: T, id?: string): Promise<T> {
    await this.Validator(data);

    const docRef = id
      ? await this.setDoc(doc(this.ref, id), data)
      : await addDoc(this.ref, data);

    return { id: docRef.id, ...data };
  }

  async update(_id: any, data: T): Promise<T | undefined> {
    if (!_id) return;
    await this.Validator(data);
    const docRef = doc(this.ref, _id);

    await updateDoc(doc(this.ref, _id), data);

    const docSnap = await getDoc(docRef);

    return { ...(docSnap.data() as T), id: docRef.id };
  }

  private async setDoc(docRef: DocumentReference, data: T) {
    await setDoc(docRef, data);
    return docRef;
  }

  async getDocsOfUser(userId?: string): Promise<T[]> {
    return !userId ? [] : this.filter('userId', '==', userId);
  }

  async filter(prop: string, op: WhereFilterOp, value: any): Promise<T[]> {
    const q = query(this.ref, where(prop, op, value));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((_doc) => {
      return { id: _doc.id, ...(_doc.data() as T) };
    });
  }

  castDate(date?: Timestamp | Date | string | null): Date | any {
    if (date instanceof Timestamp) {
      return date.toDate();
    } else if (date) {
      return new Date(date);
    } else {
      return date;
    }
  }

  async Validator(data: T, schema: SchemaOf<any> = this.schema) {
    try {
      await schema.validate(data, { abortEarly: false });
    } catch (err: any) {
      console.error(this._name);
      throw new Error(err);
    }
  }
}
