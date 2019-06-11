const Sequelize = require('sequelize');
const sequelize = new Sequelize('ex_nodejs_db', 'root', 'howto@@', {
host: 'localhost',
dialect: 'mysql',

pool: {
max: 5,
min: 0,
acquire: 30000,
idle: 10000
},

// SQLite only
// storage: 'path/to/database.sqlite',

// http://docs.sequelizejs.com...
// operatorsAliases: false
});

const User = sequelize.define('user', {
    name:Sequelize.STRING
});

module.exports = {
    sequelize: sequelize,
    User : User
}