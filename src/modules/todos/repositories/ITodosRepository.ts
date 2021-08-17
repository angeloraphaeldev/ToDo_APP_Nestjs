import { ICreateTodoDTO } from '../dtos/ICreateTodoDTO';
import { TodoEntity } from '../infra/typeorm/entities/TodoEntity';

interface ITodosRepository {
  create(data: ICreateTodoDTO): TodoEntity;
  findByName(name: string): TodoEntity;
  list(): TodoEntity[];
}
export { ITodosRepository };
// DTOS, criar interfaces para serem reaproveitadas em outros arquivos
