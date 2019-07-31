'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Recipe.associate = function(models) {
    Recipe.belongsTo(models.User, {foreignKey: 'userId', as: 'user'})
  };
  return Recipe;
};