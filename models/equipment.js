'use strict';
module.exports = (sequelize, DataTypes) => {
  const Equipment = sequelize.define('Equipment', {
    name: DataTypes.STRING
  }, {});
  Equipment.associate = function(models) {
    // associations can be defined here
  };
  return Equipment;
};