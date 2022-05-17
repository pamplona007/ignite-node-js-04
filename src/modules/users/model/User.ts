import { v4 as uuidV4 } from "uuid";

import { ICreateUserDTO } from "../repositories/IUsersRepository";

class User {
  id: string;
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  updated_at: Date;

  constructor() {
    this.id = uuidV4();
    this.admin = false;
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}

export { User };
