module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    time: DataTypes.INTEGER,
    portion: DataTypes.STRING,
    grade: DataTypes.FLOAT,
    vegan: DataTypes.BOOLEAN
  }, {});
  Recipe.associate = function(models) {
    Recipe.belongsTo(models.User, {foreignKey: 'userId', as: 'user'});
    Recipe.hasMany(models.Picture, {as: 'pictures'});
    Recipe.hasMany(models.Step, {as: 'steps'});
    Recipe.hasMany(models.Rate, {as: 'rates'});
    Recipe.hasMany(models.Ingredient, {as: 'ingredients'});
    Recipe.hasMany(models.Tag, {as: 'tags'});
    Recipe.hasOne(models.Picture, {as: 'picture'});

  };
  return Recipe;
};