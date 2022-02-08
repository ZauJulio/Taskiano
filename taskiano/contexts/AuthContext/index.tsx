import { ReactNode, useEffect, useState } from "react";

import { AuthContext } from "./Provider";

import { GlobalController, UserController } from "../../lib";

import { ToastDisconnected, ToastTrySignInAgain } from "../../utils/toasts";

import type { IAuthState, IUser } from "../../types";
import { useRouter } from "next/router";

interface IAuthContextProvider {
  authState: IAuthState;
  children: ReactNode;
}

export function AuthContextProvider(props: IAuthContextProvider) {
  const router = useRouter();

  const [user, setUser] = useState<IUser>();
  const [authenticated, setAuthenticated] = useState(false);

  const { authUser, mounted, signIn, signOut } = props.authState;

  const isDisconnected = () => {
    return !authUser && mounted && router.pathname !== "/";
  };

  const isLogging = () => {
    return router.pathname === "/" || router.pathname === "/login";
  };

  const handleAuth = (u: IUser) => {
    setUser(u);
    setAuthenticated(true);
  };

  const createUser = async () => {
    if (!authUser) return;

    return GlobalController.createUserRecord(
      UserController.assembleUser(authUser)
    );
  };

  const fetchUser = async () => {
    if (!authUser) return;
    let userRecord;

    try {
      userRecord = await UserController.get(authUser.uid);
      userRecord = userRecord ?? (await createUser());

      userRecord && handleAuth(userRecord);
    } catch (e) {
      console.error(e);
      ToastTrySignInAgain();
    }
  };

  const deleteAccount = async () => {
    user && user.id && (await GlobalController.deleteUserRecord(user.id));
    return signOut();
  };

  useEffect(() => {
    if (!authUser) {
      setUser(undefined);
      setAuthenticated(false);
    } else {
      setAuthenticated(true);
    }
  }, [authUser]);

  useEffect(() => {
    if (authUser && mounted) {
      fetchUser();
    } else if (isDisconnected()) {
      !isLogging() ? router.push("/login") : ToastDisconnected();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authUser, mounted]);

  return (
    <AuthContext.Provider
      value={{
        user,
        authenticated,
        deleteAccount,
        signIn: signIn,
        signOut: signOut,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
