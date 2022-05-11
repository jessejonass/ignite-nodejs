import { DataSource } from 'typeorm';

export const AppDataSource: DataSource = new DataSource({
  type: 'postgres',
  port: 5432,
  host: 'localhost',
  username: 'docker',
  password: 'ignite',
  database: 'rentx',
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: ['./src/database/migrations/*.ts'],
});

AppDataSource.initialize();
