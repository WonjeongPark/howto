const Sequelize = require('sequelize');
// const sequelize = new Sequelize('ex_nodejs_db', 'root', 'howto@@', {
// host: 'localhost',
// dialect: 'mysql',

// pool: {
// max: 5,
// min: 0,
// acquire: 30000,
// idle: 10000
// },
// });
const config = require('./config/environments');

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

const User = sequelize.define('user', {
    name:Sequelize.STRING
});

module.exports = {
    sequelize: sequelize,
    User : User
}

