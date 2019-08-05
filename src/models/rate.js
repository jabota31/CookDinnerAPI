module.exports = (sequelize, DataTypes) => {
  const Rate = sequelize.define('Rate', {
    favorite: DataTypes.BOOLEAN,
    grade: DataTypes.INTEGER,
    recipeId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {freezeTableName: true});
  
  return Rate;
};