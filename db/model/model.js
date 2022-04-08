const { Sequelize } = require('sequelize/types');

module.exports = (Sequelize, sequelize) => {
  return sequelize.define('users', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement,
      allowNull: false,
    },
    email: { type: Sequelize.STRING(256), allowNull: false },
    name: { type: Sequelize.STRING(100), allowNull: false },
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
      allowNull: false,
    },
  });
};
