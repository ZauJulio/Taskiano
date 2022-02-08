import IUser from "./User";
import IHistory from "./History";
import ITask from "./Task";
import IProject from "./Project";

import { IRepository, IRepositoryConstructor, WhereFilterOp } from "./IRepository";
import IAuthUser from "./IAuthUser";
import { IAuthState, IHookAuthProps } from "./IHookAuth";
import { User as IFirebaseUser } from "firebase/auth";
import IScoreRules from "./IScoreRules";

import IWeekday from "./Weekday";
import IWeekdayPercent from "./WeekdayPercent";
import IProjectTasks from "./ProjectTasks";


export type { NextRouter } from "next/router";
export type { NextPage } from "next";

// Data entities
export type { IUser, IHistory, IProject, ITask };

// Lib types
export type {
  IRepository,
  IRepositoryConstructor,
  IAuthUser,
  IAuthState,
  IHookAuthProps,
  IFirebaseUser,
  IScoreRules,
};

// Data utils types
export type { IWeekday, IWeekdayPercent, IProjectTasks, WhereFilterOp };
