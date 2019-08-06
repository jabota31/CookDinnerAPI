module.exports = (sequelize, DataTypes) => {
  const Step = sequelize.define('Step', {
    number: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    recipeId: DataTypes.INTEGER
  }, {freezeTableName: true});
  
  Step.associate = function(models) {
    Step.belongsTo(models.Recipe, {foreignKey: 'recipeId', as: 'recipe'});
  };
  return Step;
};