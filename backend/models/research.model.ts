// models/research.model.ts
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db'; // Adjust the import path as necessary

export class Research extends Model {}

Research.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('draft', 'published'),
      allowNull: false,
      defaultValue: 'draft'
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Research',
    tableName: 'Researches',
    timestamps: true
  }
);
