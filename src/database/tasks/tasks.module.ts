import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksEntity } from './tasks.entity';
import { TaskRepositoryService } from './tasks.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TasksEntity])],
  providers: [TaskRepositoryService],
  exports: [TaskRepositoryService],
})
export class TasksDatabaseModule {}
