'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Bookings', [{
     ConsumerId : 1,
     StudioId : 2,
     book_date : new Date(),
     createdAt : new Date(),
     updatedAt : new Date()
  }, {
    ConsumerId : 2,
    StudioId : 3,
    book_date : new Date(),
    createdAt : new Date(),
    updatedAt : new Date()
  }, {
    ConsumerId : 3,
    StudioId : 1,
    book_date : new Date(),
    createdAt : new Date(),
    updatedAt : new Date()
  }])
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Bookings', null)
  }
};
