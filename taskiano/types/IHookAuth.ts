import { IAuthUser } from '.'

export interface IHookAuthProps {
  areLoggedIn?: boolean
  onLinkAccounts?: (method: string, email: string) => void
  onSignOut?: () => void
  onSignInError?: () => void
  onSignInSuccess?: () => void
}

export interface IAuthState {
  authUser: IAuthUser | null
  mounted: boolean
  signIn: (providerId: string) => Promise<void>
  signOut: () => Promise<void>
}
