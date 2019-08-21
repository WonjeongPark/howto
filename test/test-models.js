
var Sequelize = require('sequelize');
// var sequelize = new Sequelize();

const config = require('../config/environments');


const sequelize = new Sequelize(
    config.mysql.database,
    config.mysql.username,
    config.mysql.password, {
        host: 'localhost',
        dialect: 'mysql',
        
        pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
        },
        })

exports.User = sequelize.define('User', {
  name: Sequelize.STRING
});