'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudioEquipment = sequelize.define('StudioEquipment', {
    StudioID: DataTypes.INTEGER,
    EquipmentId: DataTypes.INTEGER
  }, {});
  StudioEquipment.associate = function(models) {
    // associations can be defined here
  };
  return StudioEquipment;
};