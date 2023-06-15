import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksDto } from './dto/tasks.dto';
import { IPagination } from '../database/tasks/tasks.interface';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAll(@Query() pagination?: IPagination) {
    return this.tasksService.getAll(pagination);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.tasksService.getOne(id);
  }

  @Post()
  create(@Body() tasksDto: TasksDto) {
    return this.tasksService.create(tasksDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() tasksDto: TasksDto) {
    return this.tasksService.update(id, tasksDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.tasksService.delete(id);
  }
}
