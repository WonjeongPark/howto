const Sequelize = require('sequelize')
const sequelize = new Sequelize('ex_nodejs_db', 'root', 'Tkgkfk0523@@', {
host: 'localhost',
dialect: 'mysql'|'sqlite'|'postgres'|'mssql',

pool: {
max: 5,
min: 0,
acquire: 30000,
idle: 10000
}
});

const User = sequelize.define('user', {
    name:Sequelize.STRING
});

module.exports = {
    sequelize: sequelize,
    User : User
}