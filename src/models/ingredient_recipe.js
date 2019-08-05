module.exports = (sequelize, DataTypes) => {
  const Ingredient_recipe = sequelize.define('Ingredient_recipe', {
    amount: DataTypes.STRING,
    ingredient_id: DataTypes.INTEGER,
    recipe_id: DataTypes.INTEGER
  }, {freezeTableName: true});

  return Ingredient_recipe;
};