'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Nguyễn Văn A',
        email: 'a@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Trần Thị B',
        email: 'b@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lê Văn C',
        email: 'c@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
