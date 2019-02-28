'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.renameColumn('Bookings', 'consumerId', 'ConsumerId')
   .then(() => {
     return queryInterface.renameColumn('Bookings', 'studioId', 'StudioId')
   })
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.renameColumn('Bookings', 'ConsumerId', 'consumerId')
   .then(() => {
     return queryInterface.renameColumn('Bookings', 'StudioId', 'studioId')
   })
  }
};