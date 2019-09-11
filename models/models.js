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
    loginID:{
        type : Sequelize.STRING,
        allowNull: false},
    loginPW:{
        type : Sequelize.STRING,
        allowNull: false},
    name:Sequelize.STRING,
    email:Sequelize.STRING,
    local:Sequelize.STRING,
    gender:Sequelize.STRING,
}, { 
});

const Trainer = sequelize.define('trainers', {
    gym:Sequelize.STRING,
    career:Sequelize.STRING,
    bodypart:Sequelize.STRING,
    playerSource:Sequelize.STRING,
    count:Sequelize.INTEGER,
    Num:Sequelize.INTEGER
})

const Trainee = sequelize.define('trainees', {
    prg:Sequelize.STRING,
    age:Sequelize.STRING,
    bodytarget:Sequelize.STRING,
    purpose:Sequelize.STRING,
    week:Sequelize.INTEGER,
    times:Sequelize.INTEGER
})

const dates = sequelize.define('dates', {
    trainers_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Trainer,
            key: `id`
          }},
    dates:Sequelize.DATE,
},{
    timestamps : false,
    
});
Trainer.belongsTo(User)
Trainee.belongsTo(User)
Trainer.hasMany(dates, {foreignKey: 'trainers_id', sourceKey: 'id'});
// dates.belongsTo(User, {foreignKey: 'users_id', targetKey: 'id'})


module.exports = {
    sequelize: sequelize,
    User : User,
    Trainer : Trainer,
    Trainee : Trainee,
    dates : dates
}

