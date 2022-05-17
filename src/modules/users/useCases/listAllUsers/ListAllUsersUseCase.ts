import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const thisUser = this.usersRepository.findById(user_id);

    if (!thisUser.admin) {
      throw new Error("forbidden");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
