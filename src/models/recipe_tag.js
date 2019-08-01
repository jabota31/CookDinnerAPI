module.exports = (sequelize, DataTypes) => {
  const Recipe_tag = sequelize.define('Recipe_tag', {
    recipeId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  Recipe_tag.associate = function(models) {
    Recipe_tag.hasMany(models.Recipe, {as: 'recipes'});
    Recipe_tag.hasMany(models.Tag, {as: 'tags'});
  };
  return Recipe_tag;
};