const Sequelize = require('sequelize');
const db = require('../config/database');

const Transport = db.define('Transport_Customers', {
  id_transport: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  Name_Sender: {
    type: Sequelize.STRING(256),
    allowNull: false,
    unique: false,
  },
  Phone_Sender: {
    type: Sequelize.STRING(256),
    allowNull: false,
    unique: false,
  },
  Adress_Sender: {
    type: Sequelize.STRING(256),
    allowNull: false,
    unique: false,
  },
  Name_Receiver: {
    type: Sequelize.STRING(256),
    allowNull: false,
    unique: false,
  },
  Adress_Receiver: {
    type: Sequelize.STRING(256),
    allowNull: false,
    unique: false,
  },
  Phone_Receiver: {
    type: Sequelize.STRING(256),
    allowNull: false,
    unique: false,
  },
});
module.exports = Transport;
