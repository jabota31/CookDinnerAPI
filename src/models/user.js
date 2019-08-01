module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    birthday: DataTypes.DATE,
    gender: DataTypes.STRING,
    profile_picture: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Recipes, {as: 'favorite_recipes'});
    User.hasMany(models.Recipes, {as: 'recipes'});
    User.belongsToMany(models.User, {through: 'user_user', as: 'followers'});
    User.belongsToMany(models.User, {through: 'user_user', as: 'follows'});
    User.hasOne(models.Picture);
  };
  return User;
};