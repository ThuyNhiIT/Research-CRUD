import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';

class User extends Model {}

User.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
  }
);

export default User;