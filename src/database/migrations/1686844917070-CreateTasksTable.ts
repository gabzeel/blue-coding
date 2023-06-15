import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTasksTable1686844917070 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      'CREATE DATABASE tasks (id uuid DEFAULT uuid_generate_v4 (), tittle varchar, description varchar, completed boolean DEFAULT false, PRIMARY KEY (id));',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('DROP TABLE tasks');
  }
}
