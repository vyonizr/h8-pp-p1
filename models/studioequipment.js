'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudioEquipment = sequelize.define('StudioEquipment', {
    EquipmentId: DataTypes.INTEGER,
    StudioID: DataTypes.INTEGER
  }, {});
  StudioEquipment.associate = function(models) {
    // associations can be defined here
  };
  return StudioEquipment;
};