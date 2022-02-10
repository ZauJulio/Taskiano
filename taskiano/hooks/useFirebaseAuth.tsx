import { useEffect, useState } from 'react'

import {
  fetchSignInMethodsForEmail,
  getRedirectResult,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  User as IFirebaseUser,
  AuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider
} from 'firebase/auth'

import { auth } from '../services/Firebase'

import { IAuthUser, IAuthState, IHookAuthProps } from '../types'

interface IAuth {
  authUser: IAuthUser | null
  mounted: boolean
}

function useFirebaseAuth(props: IHookAuthProps): IAuthState {
  const [state, setState] = useState<IAuth>({
    authUser: auth.currentUser,
    mounted: true
  })

  const fillAuth = (fireUser: IFirebaseUser | null) => {
    if (state.authUser !== fireUser) {
      setState({ authUser: fireUser, mounted: true })

      if (props.areLoggedIn && fireUser) {
        props.onSignInSuccess && props.onSignInSuccess()
      }
    }
  }

  const linkAccounts = (email: string) => {
    fetchSignInMethodsForEmail(auth, email).then((methods) => {
      props.onLinkAccounts && props.onLinkAccounts(methods[0], email)

      setTimeout(() => signInWithRedirect(auth, getProvider(methods[0])), 5000)
    })
  }

  const signIn = async (providerId: string) => {
    signInWithPopup(auth, getProvider(providerId))
      .then((fbUser) => fillAuth(fbUser.user))
      .catch((error) => {
        ErrorAccountExists(error.code)
          ? linkAccounts(error.email)
          : props.onSignInError && props.onSignInError()
      })
  }

  const signOut = async () => {
    auth.signOut().then(() => {
      setState({ authUser: null, mounted: true })

      indexedDB.deleteDatabase('firebaseLocalStorageDb')

      props.onSignOut && props.onSignOut()
    })
  }

  useEffect(() => {
    setState({ authUser: auth.currentUser, mounted: true })

    getRedirectResult(auth)
      .then((fbUser) => fbUser && fillAuth(fbUser.user))
      .catch(() => props.onSignInError && props.onSignInError())

    return onAuthStateChanged(auth, (fbUser) => fillAuth(fbUser))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    ...state,
    signIn,
    signOut
  }
}

function getProvider(providerId: string): AuthProvider {
  switch (providerId) {
    case GoogleAuthProvider.PROVIDER_ID:
      return new GoogleAuthProvider()
    case FacebookAuthProvider.PROVIDER_ID:
      return new FacebookAuthProvider()
    case TwitterAuthProvider.PROVIDER_ID:
      return new TwitterAuthProvider()
    case GithubAuthProvider.PROVIDER_ID:
      return new GithubAuthProvider()
    default:
      throw new Error(`No provider implemented for ${providerId}`)
  }
}

const ErrorAccountExists = (code: string) => {
  return code === 'auth/account-exists-with-different-credential'
}

export default useFirebaseAuth
