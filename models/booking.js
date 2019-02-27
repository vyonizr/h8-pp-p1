'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    studio: DataTypes.STRING,
    book_date: DataTypes.DATE
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
  };
  return Booking;
};