import { TodoEntity } from '../../infra/typeorm/entities/TodoEntity';
import { ITodosRepository } from '../../repositories/ITodosRepository';

class ListTaskUseCase {
  constructor(private todosRepository: ITodosRepository) {}
  execute(): TodoEntity[] {
    const tasks = this.todosRepository.list();
    return tasks;
  }
}

export { ListTaskUseCase };
