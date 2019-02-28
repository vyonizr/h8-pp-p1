'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Consumers", "gender")
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Consumers", "gender", {
      type: Sequelize.ENUM("male", "female")
    })
  }
};
