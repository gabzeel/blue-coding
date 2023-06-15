import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TasksEntity } from './tasks.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IPagination, ITaks } from './tasks.interface';

@Injectable()
export class TaskRepositoryService {
  constructor(
    @InjectRepository(TasksEntity)
    private readonly tasksRepository: Repository<TasksEntity>,
  ) {}

  getAll(pagination?: IPagination) {
    return this.tasksRepository.find({
      skip: pagination.skip,
      take: pagination.take,
    });
  }

  getAllThatIsNotCompleted() {
    return this.tasksRepository.find({
      where: { completed: false },
    });
  }

  getOne(id: string) {
    return this.tasksRepository.findOne({
      where: { id },
    });
  }

  create(tasks: Omit<ITaks, 'completed'>) {
    return this.tasksRepository.save(tasks);
  }

  update(id: string, tasks: Partial<ITaks>) {
    return this.tasksRepository.update(id, tasks);
  }

  setCompleted(id: string) {
    return this.update(id, { completed: true });
  }

  delete(id: string) {
    return this.tasksRepository.delete(id);
  }
}
