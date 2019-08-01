module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ingredient_recipe', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ingredient_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Ingredient',
          key: 'id'
        }
      },
      recipe_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Recipe',
          key: 'id'
        }
      },
      amount: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ingredient_recipe');
  }
};