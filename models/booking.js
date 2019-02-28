'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
<<<<<<< HEAD
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
=======
    StudioId: DataTypes.INTEGER,
    ConsumerId:DataTypes.INTEGER,
    book_date: DataTypes.DATE
>>>>>>> 0d739954722f5bd99bb4cb8d6a1f437bca3a4fcb
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
  };
  return Booking;
};