// db.ts
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  'research_db',
  'root',
  'rootpassword',
  {
    host: '127.0.0.1',
    dialect: 'mysql' // hoặc 'postgres'
  }
);
