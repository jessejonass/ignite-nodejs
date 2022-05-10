import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'postgres',
  port: 5432,
  host: 'database',
  username: 'docker',
  password: 'ignite',
  database: 'rentx',
  migrations: ['./src/database/migrations/*.ts'],
  entities: ['./src/modules/**/entities/*.ts'],
});

dataSource.initialize();
