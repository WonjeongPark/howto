module.exports = (sequelize, DataTypes) => {
    const dates = sequelize.define('dates', {
        users_id: {
            type: Sequelize.INTEGER,
            references: {
                model: User,
                key: 'id'
              }},
        dates:Sequelize.DATE,
        
    });
  
    dates.associate = (models) => {
        dates.belongsTo(models.User);
    };
  
    return dates;
  }