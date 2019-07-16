const Sequelize = require('sequelize');

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

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    name:Sequelize.STRING,
    gym:Sequelize.STRING,
    gender:Sequelize.STRING,
    career:Sequelize.STRING,
    dates:Sequelize.DATE,
    bodypart:Sequelize.STRING,
    playerSource:Sequelize.STRING,
    count:Sequelize.INTEGER,
    setNum:Sequelize.INTEGER
});

module.exports = {
    sequelize: sequelize,
    User : User
}

