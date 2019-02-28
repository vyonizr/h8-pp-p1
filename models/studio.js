'use strict';
module.exports = (sequelize, DataTypes) => {
  const Studio = sequelize.define('Studio', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    daily_rate: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {});
  Studio.associate = function(models) {
    // associations can be defined here
    Studio.belongsToMany(models.Equipment, {through: models.StudioEquipment})
  };
  return Studio;
};