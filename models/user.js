const Sequelize = require('sequelize');
const db = require('../config/database');

const Users = db.define('Users', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: Sequelize.STRING(256),
    allowNull: false,
    unique: false,
  },
  Email: {
    type: Sequelize.STRING(256),
    allowNull: false,
    unique: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  role: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  MaBuuCuc: {
    type: Sequelize.STRING(256),
    allowNull: false,
    unique: false,
  },
  DiaChi: {
    type: Sequelize.STRING(256),
    allowNull: false,
    unique: false,
  },
  Sdt: {
    type: Sequelize.STRING(100),
    allowNull: false,
    unique: false,
  },
});
module.exports = Users;
