module.exports = (sequelize, DataTypes) => {
  const User_tag = sequelize.define('User_tag', {
    userId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {freezeTableName: true});

  return User_tag;
};