module.exports = (sequelize, DataTypes) => {
  const Ingredient_recipe = sequelize.define('Ingredient_recipe', {
    amount: DataTypes.STRING,
    ingredient_id: DataTypes.INTEGER,
    recipe_id: DataTypes.INTEGER
  }, {});
  Ingredient_recipe.associate = function(models) {
    Ingredient_recipe.hasMany(models.Ingredient, {as: 'ingredients'});
    Ingredient_recipe.hasMany(models.Recipe, {as: 'recipes'});
  };
  return Ingredient_recipe;
};