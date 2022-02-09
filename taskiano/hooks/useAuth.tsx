import { useContextSelector } from 'use-context-selector'
import { AuthContext, IAuthContext } from '../contexts/AuthContext/Provider'

export function useAuth(selector: (value: IAuthContext) => any) {
  return useContextSelector(AuthContext, selector)
}
