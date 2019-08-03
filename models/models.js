const Sequelize = require('sequelize');

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
    bodypart:Sequelize.STRING,
    playerSource:Sequelize.STRING,
    count:Sequelize.INTEGER,
    setNum:Sequelize.INTEGER
}, { 
    // sequelize, modelName: 'user',
    // underscored: true
});

const dates = sequelize.define('dates', {
    users_id: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: `id`
          }},
    dates:Sequelize.DATE,
},{
    timestamps : false,
    
});
User.hasMany(dates, {foreignKey: 'users_id', sourceKey: 'id'});
dates.belongsTo(User, {foreignKey: 'users_id', targetKey: 'id'})

// User.associate = (models) => {
//     User.hasMany(models.dates);
//   };

// dates.associate = (models) => {
//     dates.belongsTo(models.User);
// };

module.exports = {
    sequelize: sequelize,
    User : User,
    dates : dates
}

