import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';
import User from './user.model';

class Research extends Model {}

Research.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'users', key: 'id' } },
  },
  {
    sequelize,
    modelName: 'Research',
    tableName: 'researches',
  }
);

Research.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Research, { foreignKey: 'userId' });

export default Research;