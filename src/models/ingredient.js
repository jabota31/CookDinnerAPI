module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define('Ingredient', {
    name: DataTypes.STRING
  }, {});
  Ingredient.associate = function(models) {
    Ingredient.belongsToMany(models.Recipe, {through: 'ingredient_recipe', as: 'recipes'});
  };
  return Ingredient;
};