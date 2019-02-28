'use strict';
const instruments =

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Equipments", [{
      name: "Keyboard",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Piano",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Acoustic guitar",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Electric guitar",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Bass guitar",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Acoustic drums",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Electronic drums",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Violin",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Cello",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Equipments", [{
      name: "Keyboard",
    }, {
      name: "Piano",
    }, {
      name: "Acoustic guitar",
    }, {
      name: "Electric guitar",
    }, {
      name: "Bass guitar",
    }, {
      name: "Acoustic drums",
    }, {
      name: "Electronic drums",
    }, {
      name: "Violin",
    }, {
      name: "Cello",
    }])
  }
};
