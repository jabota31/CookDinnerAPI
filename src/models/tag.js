module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: DataTypes.STRING
  }, {freezeTableName: true});

  Tag.associate = function(models) {
    Tag.belongsToMany(models.Recipe, {through: 'recipe_tag', as: 'recipes'});
  };
  return Tag;
};