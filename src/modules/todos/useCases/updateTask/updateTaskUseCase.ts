import { IUpdateTodoDTO } from '../../dtos/IUpdateTodoDTO';
import { TodoEntity } from '../../infra/typeorm/entities/TodoEntity';
import { ITodosRepository } from '../../repositories/ITodosRepository';

class UpdateTaskUseCase {
  constructor(private todosRepository: ITodosRepository) {}
  async execute({
    name,
    description,
    isChecked,
  }: IUpdateTodoDTO): Promise<TodoEntity> {}
}

export { UpdateTaskUseCase };
