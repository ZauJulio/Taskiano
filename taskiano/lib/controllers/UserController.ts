import { UserRepository } from "../repositories";
import { UserService } from "../services";

import type { IAuthUser } from "../../types";

export class UserController {
  private service: UserService;

  constructor(props: { service: UserService }) {
    this.service = props.service;
  }

  async get(id: string) {
    return this.service.get(id);
  }

  assembleUser(user: IAuthUser) {
    return {
      id: user.uid,
      username: user.displayName,
      avatar: user.photoURL,
      email: user.email,
    };
  }
}

const instance = new UserController({
  service: new UserService({
    repo: UserRepository,
  }),
});

export default instance;
