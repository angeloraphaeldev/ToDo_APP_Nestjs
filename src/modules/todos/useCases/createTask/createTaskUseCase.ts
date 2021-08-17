import { BadRequestException, Injectable } from '@nestjs/common';
import { ICreateTodoDTO } from '../../dtos/ICreateTodoDTO';
import { TodoEntity } from '../../infra/typeorm/entities/TodoEntity';
import { ITodosRepository } from '../../repositories/ITodosRepository';

@Injectable()
class CreateTaskUseCase {
  constructor(private todosRepository: ITodosRepository) {}
  execute({ name, description }: ICreateTodoDTO): TodoEntity {
    const taskAlreadyExists = this.todosRepository.findByName(name);

    if (taskAlreadyExists) {
      throw new BadRequestException('Task Already Exists');
    }
    const task = this.todosRepository.create({ name, description });

    return task;
  }
}

export { CreateTaskUseCase };
