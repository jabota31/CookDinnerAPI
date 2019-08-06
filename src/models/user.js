'use strict'

export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    birthday: DataTypes.DATE,
    gender: DataTypes.STRING,
    profile_picture: DataTypes.STRING
  }, {freezeTableName: true})
  
  User.associate = function(models) {
    User.hasMany(models.Recipe, {as: 'recipes'})
    User.belongsToMany(models.User, {through: 'user_user', as: 'followers'})
    User.belongsToMany(models.User, {through: 'user_user', as: 'follows'})
    User.hasOne(models.Picture)
  }
  return User
}
