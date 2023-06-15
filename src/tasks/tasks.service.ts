import { Injectable } from '@nestjs/common';
import { TaskRepositoryService } from '../database/tasks/tasks.repository';
import { TasksDto } from './dto/tasks.dto';
import { IPagination } from '../database/tasks/tasks.interface';
import { TasksEntity } from '../database/tasks/tasks.entity';

@Injectable()
export class TasksService {
  constructor(private readonly tasksRepositoryService: TaskRepositoryService) {}

  getAll(pagination?: IPagination) {
    return this.tasksRepositoryService.getAll(pagination);
  }

  getOne(id: string) {
    return this.tasksRepositoryService.getOne(id);
  }

  create(tasksDto: TasksDto) {
    return this.tasksRepositoryService.create(tasksDto);
  }

  async update(id: string, tasksDto: TasksDto) {
    const result = await this.tasksRepositoryService.update(id, tasksDto);

    return result.affected > 0;
  }

  async delete(id: string) {
    const result = await this.tasksRepositoryService.delete(id);

    return result.affected > 0;
  }

  async runTask(task: TasksEntity) {
    console.log(task, 'executed');
  }
}
