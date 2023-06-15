import { ITaks } from '../../database/tasks/tasks.interface';

export class TasksDto implements ITaks {
  title: string;
  description?: string;
  completed?: boolean;
}
