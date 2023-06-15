import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ITaks } from './tasks.interface';

@Entity('tasks')
export class TasksEntity implements ITaks {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ default: false })
  completed: boolean;
}
