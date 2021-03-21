import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user || !user.admin) {
      throw new Error("Could not return list of users.");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
