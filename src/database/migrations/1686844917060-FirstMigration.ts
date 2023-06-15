import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTasksTable1686844917070 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
