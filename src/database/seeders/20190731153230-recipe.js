'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Recipes', [
      {
        name: 'Arroz',
        description: 'Arrozin bolado',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Recipes', null, {});
  }
};
