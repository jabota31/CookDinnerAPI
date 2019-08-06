'use strict'

export default {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Users', [
			{
				name: 'Johnson',
				email: 'demoee@demo.com',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'John',
				email: 'demo@demo.com',
				createdAt: new Date(),
				updatedAt: new Date()
			}
		], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users', null, {})
	}
}
