import { Body, Controller } from '@nestjs/common';
import { ICreateTodoDTO } from 'src/modules/todos/dtos/ICreateTodoDTO';
import { CreateTaskUseCase } from '../../../useCases/createTask/createTaskUseCase';
import { TodoEntity } from '../../typeorm/entities/TodoEntity';
@Controller('todos')
class TodosController {
  constructor(private createTaskUseCase: CreateTaskUseCase) {}
  create(@Body() { name, description }: ICreateTodoDTO): TodoEntity {
    return this.createTaskUseCase.execute({ description, name });
  }
}
export { TodosController };

/** CONTROLLER                        UseCase
 * browser -> retornar varios   |||||| list
 * index -> retornar um         |||||| show
 * update
 * delete
 * create
 */
