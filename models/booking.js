'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    studioId: {
      type: DataTypes.INTEGER,
      notNull: true,
      notEmpty: true
    },
    consumerId: {
      type: DataTypes.INTEGER,
      notNull: true,
      notEmpty: true
    },
    book_date: {
      type: DataTypes.DATE,
      notNull: true,
      notEmpty: true
    }
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
  };
  return Booking;
};