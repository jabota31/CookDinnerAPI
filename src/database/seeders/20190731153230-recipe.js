'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('recipe', [
      {
        name: 'Arroz',
        description: 'Arrozin bolado',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 7
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('recipe', null, {});
  }
};
