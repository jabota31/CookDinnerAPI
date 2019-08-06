module.exports = (sequelize, DataTypes) => {
  const Recipe_tag = sequelize.define('Recipe_tag', {
    recipeId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {freezeTableName: true});

  return Recipe_tag;
};