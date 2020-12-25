import * as dotenv from 'dotenv';
import { IDatabaseConfig } from './databaseConfig.interface';
dotenv.config();

export const databaseConfig: IDatabaseConfig = {
  port: 3306,
  dialect: 'mysql',
  username: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
};
