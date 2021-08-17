import { BadRequestException } from '@nestjs/common';
import { FakeTodosRepository } from '../../repositories/fakes/FakeTodosRepository';
import { CreateTaskUseCase } from './createTaskUseCase';

let createTaskUseCase: CreateTaskUseCase;
let fakeTodosRepository: FakeTodosRepository;

describe('Create Task', () => {
  beforeEach(() => {
    fakeTodosRepository = new FakeTodosRepository();
    createTaskUseCase = new CreateTaskUseCase(fakeTodosRepository);
  });
  it('Should be able to create a new task', () => {
    expect(
      createTaskUseCase.execute({
        name: 'task',
        description: 'Created a new task',
      }),
    ).toHaveProperty('id');
  });
  it('Should not be able create a task, because name already exists', () => {
    fakeTodosRepository.create({ name: 'task', description: 'Created A Task' });
    const task = createTaskUseCase.execute({
      name: 'task',
      description: 'Created A new task',
    });
    expect(task).rejects.toEqual(
      new BadRequestException('Task Already Exists'),
    );
  });
});
