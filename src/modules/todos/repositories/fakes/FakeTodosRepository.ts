import { ICreateTodoDTO } from '../../dtos/ICreateTodoDTO';
import { TodoEntity } from '../../infra/typeorm/entities/TodoEntity';
import { ITodosRepository } from '../ITodosRepository';

class FakeTodosRepository implements ITodosRepository {
  private todos: TodoEntity[] = [];

  create({ description, name }: ICreateTodoDTO): TodoEntity {
    const task = new TodoEntity();

    Object.assign(task, {
      name,
      description,
      isChecked: false,
      createdAt: new Date(),
    });
    this.todos.push(task);

    return task;
  }
  findByName(name: string): TodoEntity {
    return this.todos.find((todo) => todo.name === name);
  }
  list(): TodoEntity[] {
    const all = this.todos;
    return all;
  }
}

export { FakeTodosRepository };
