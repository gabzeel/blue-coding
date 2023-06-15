import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksDatabaseModule } from '../database/tasks/tasks.module';
import { TasksService } from './tasks.service';

@Module({
  imports: [TasksDatabaseModule],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
