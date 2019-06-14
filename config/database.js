const Sequelize = require('sequelize');

module.exports = new Sequelize ('post_office', 'postgres', '01666640094',{
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
})