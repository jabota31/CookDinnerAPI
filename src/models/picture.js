module.exports = (sequelize, DataTypes) => {
  const Picture = sequelize.define('Picture', {
    path: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    recipeId: DataTypes.INTEGER
  }, {});
  Picture.associate = function(models) {
    Picture.belongsTo(models.User, {foreignKey: 'userId', as: 'user'});
    Picture.belongsTo(models.Recipe, {foreignKey: 'recipeId', as: 'recipe'});
  };
  return Picture;
};