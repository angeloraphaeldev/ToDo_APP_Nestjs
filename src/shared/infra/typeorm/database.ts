import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';
export const database: TypeOrmModuleOptions = {
  type: 'postgres',
  port: 5432,
  host: 'localhost',
  username: 'docker',
  password: 'ignite',
  database: 'todo',
  entities: [
    path.resolve(
      __dirname,
      '..',
      '..',
      'modules',
      '**',
      'infra',
      'typeorm',
      'entities',
      '*.ts',
    ),
  ],
  migrations: [path.resolve(__dirname, 'migrations')],
  cli: {
    migrationsDir: path.resolve(__dirname, 'migrations'),
  },
  //Sempre que executar qualquer query sql ele retorna no console. So pra saber quais sql mostrar.
  logging: ['error', 'warn'],
};
