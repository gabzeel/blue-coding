import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TasksEntity } from '../database/tasks/tasks.entity';

export const TYPE_ORM_CONFIG = 'TYPE_ORM_CONFIG';

export default registerAs<TypeOrmModuleOptions>(TYPE_ORM_CONFIG, () => {
  return {
    type: 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port: Number(process.env.DATABASE_PORT) || 5432,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME || 'postgres',
    password: process.env.DATABASE_PASSWORD,
    entities: [TasksEntity],
    migrationsRun: true,
  };
});
