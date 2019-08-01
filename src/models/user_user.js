module.exports = (sequelize, DataTypes) => {
  const User_user = sequelize.define('User_user', {
    followedId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  User_user.associate = function(models) {
    User_user.hasMany(models.User, {as: 'followers'});
    User_user.hasMany(models.User, {as: 'follows'});
  };
  return User_user;
};