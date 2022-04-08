import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sequelize', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  define: { timestamps: false },
});

class User extends Model {}

User.init(
  {
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  { sequelize, modelName: 'user' }
);
