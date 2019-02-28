'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    StudioId: DataTypes.INTEGER,
    ConsumerId:DataTypes.INTEGER,
    book_date: DataTypes.DATE
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
    Booking.belongsTo(models.Consumer)
  };
  return Booking;
};