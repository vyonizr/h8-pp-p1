'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Studios", [{
      name: "727 Studios",
      location: "Kebayoran Lama",
      daily_rate: 270,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
    .then(() => {
      return queryInterface.bulkInsert("Studios", [{
        name: "Stand Up Sound",
        location: "Kebon Jeruk",
        daily_rate: 342,
        createdAt: new Date(),
        updatedAt: new Date()
      }])
    })
    .then(() => {
      return queryInterface.bulkInsert("Studios", [{
        name: "Subdecibel",
        location: "Kebayoran Lama",
        daily_rate: 540,
        createdAt: new Date(),
        updatedAt: new Date()
      }])
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Studios", [{
      name: "727 Studios",
      location: "Kebayoran Lama",
      daily_rate: 270
    }])
    .then(() => {
      return queryInterface.bulkDelete("Studios", [{
        name: "Stand Up Sound",
        location: "Kebon Jeruk",
        daily_rate: 342
      }])
    })
    .then(() => {
      return queryInterface.bulkDelete("Studios", [{
        name: "Subdecibel",
        location: "Kebayoran Lama",
        daily_rate: 540
      }])
    })
  }
};
