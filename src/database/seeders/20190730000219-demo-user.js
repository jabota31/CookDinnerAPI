'use strict'

export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user', [
      {
        username: 'Johnson',
        password: '123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Johnny',
        password: '321',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {})
  }
}
