'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('researches', [
      {
        title: 'Nghiên cứu trí tuệ nhân tạo',
        description: 'Tập trung vào ứng dụng AI trong giáo dục.',
        userId: 1, // giả định userId 1 tồn tại
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Phân tích dữ liệu lớn',
        description: 'Nghiên cứu xử lý dữ liệu Big Data.',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Ứng dụng Machine Learning',
        description: 'Áp dụng ML trong y tế và chăm sóc sức khoẻ.',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('researches', null, {});
  }
};
