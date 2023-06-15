import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { TaskRepositoryService } from '../database/tasks/tasks.repository';
import { TasksService } from './tasks.service';

@Injectable()
export class TasksCronService {
  constructor(
    private readonly taskRepository: TaskRepositoryService,
    private readonly tasksService: TasksService,
  ) {}

  @Cron(CronExpression.EVERY_10_SECONDS)
  async handleCron() {
    const tasks = await this.taskRepository.getAllThatIsNotCompleted();

    await Promise.all(
      tasks.map(async (task) => {
        await this.tasksService.runTask(task);

        this.taskRepository.setCompleted(task.id);
      }),
    );
  }
}
