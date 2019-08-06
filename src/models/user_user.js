module.exports = (sequelize, DataTypes) => {
  const User_user = sequelize.define('User_user', {
    followedId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {freezeTableName: true});
  
  return User_user;
};