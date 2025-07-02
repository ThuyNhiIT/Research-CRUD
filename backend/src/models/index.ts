import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export const sequelize = new Sequelize('research_db', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

export { default as User } from './user.model';
export { default as Research } from './research.model';