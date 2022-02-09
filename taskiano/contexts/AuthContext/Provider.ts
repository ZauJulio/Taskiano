import { createContext } from 'use-context-selector';
import type { IUser } from '../../types';

export interface IAuthContext {
  user?: IUser;
  authenticated: boolean;
  deleteAccount: () => Promise<void>;
  signIn: (providerId: string) => void;
  signOut: () => void;
}

export const AuthContext = createContext({} as IAuthContext);
