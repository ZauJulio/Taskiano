import { useRouter } from 'next/router'
import { IAuthState, IHookAuthProps } from '../types'

import {
  ToastEmailExists,
  ToastComeBackSoon,
  ToastTryOtherProvider,
  ToastFoundedEmail
} from '../utils/toasts'

interface UseAuthHookProps {
  authHook: (props: IHookAuthProps) => IAuthState
}

function useAuthHook(props: UseAuthHookProps): IAuthState {
  const router = useRouter()

  return props.authHook({
    areLoggedIn: router.pathname === '/login',
    onLinkAccounts: (provider, email) => {
      ToastEmailExists(provider, email)
    },
    onSignOut: () => {
      router.push('/login')
      ToastComeBackSoon()
    },
    onSignInError: () => ToastTryOtherProvider(),
    onSignInSuccess: () => ToastFoundedEmail()
  })
}

export default useAuthHook
