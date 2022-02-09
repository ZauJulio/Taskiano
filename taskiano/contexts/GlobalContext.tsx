import {
  AuthContextProvider,
  ProjectsContextProvider,
  TasksContextProvider,
  HistoryContextProvider,
} from '.';

import type { ReactElement } from 'react';
import type { IAuthState } from '../types';

interface GlobalContextProps {
  authState: IAuthState;
  children: ReactElement;
}

function GlobalContext(props: GlobalContextProps) {
  return (
    <AuthContextProvider authState={props.authState}>
      <HistoryContextProvider>
        <ProjectsContextProvider>
          <TasksContextProvider>{props.children}</TasksContextProvider>
        </ProjectsContextProvider>
      </HistoryContextProvider>
    </AuthContextProvider>
  );
}

export default GlobalContext;
