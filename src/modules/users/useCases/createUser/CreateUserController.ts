import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const userInfo = {
      name: request.body.name,
      email: request.body.email,
    };

    try {
      const user = this.createUserUseCase.execute(userInfo);
      return response.status(201).json(user);
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
}

export { CreateUserController };
