'use strict';
module.exports = (sequelize, DataTypes) => {
  const Consumer = sequelize.define('Consumer', {
    username: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.ENUM("male", "female")
  }, {});
  Consumer.associate = function(models) {
    // associations can be defined here
    Consumer.hasMany(models.Booking)
  };
  return Consumer;
};