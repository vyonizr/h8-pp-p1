'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert("StudioEquipments", [{
      StudioId: 1,
      EquipmentId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      StudioId: 1,
      EquipmentId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      StudioId: 1,
      EquipmentId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      StudioId: 1,
      EquipmentId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      StudioId: 1,
      EquipmentId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      StudioId: 2,
      EquipmentId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      StudioId: 2,
      EquipmentId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      StudioId: 2,
      EquipmentId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      StudioId: 2,
      EquipmentId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      StudioId: 2,
      EquipmentId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      StudioId: 2,
      EquipmentId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      StudioId: 3,
      EquipmentId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      StudioId: 3,
      EquipmentId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      StudioId: 3,
      EquipmentId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      StudioId: 3,
      EquipmentId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      StudioId: 3,
      EquipmentId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      StudioId: 3,
      EquipmentId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      StudioId: 3,
      EquipmentId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      StudioId: 3,
      EquipmentId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      StudioId: 3,
      EquipmentId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkInsert("StudioEquipments", null, {})
  }
};
