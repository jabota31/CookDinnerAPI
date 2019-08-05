module.exports = (sequelize, DataTypes) => {
  const Rate = sequelize.define('Rate', {
    favorite: DataTypes.BOOLEAN,
    grade: DataTypes.INTEGER,
    recipeId: DataTypes.INTEGER
  }, {freezeTableName: true});
  
  Rate.associate = function(models) {
    Rate.belongsTo(models.Recipe, {foreignKey: 'recipeId', as: 'recipe'});
  };
  return Rate;
};