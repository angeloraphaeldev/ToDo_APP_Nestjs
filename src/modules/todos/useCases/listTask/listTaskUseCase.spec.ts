import { FakeTodosRepository } from '../../repositories/fakes/FakeTodosRepository';
import { ListTaskUseCase } from './listTaskUseCase';

let listTasksUseCase: ListTaskUseCase;
let fakeTasksRepository: FakeTodosRepository;

describe('List Tasks', () => {
  beforeEach(() => {
    fakeTasksRepository = new FakeTodosRepository();
    listTasksUseCase = new ListTaskUseCase(fakeTasksRepository);
  });
  it('Should be able to list the tasks', () => {
    const task = fakeTasksRepository.create({
      name: 'task',
      description: 'Created A Task',
    });
    expect(listTasksUseCase.execute()).toEqual([task]);
  });
});
