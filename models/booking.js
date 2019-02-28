'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    StudioId: {
      type: DataTypes.INTEGER,
      notNull: true,
      notEmpty: true
    },
    ConsumerId: {
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

  Booking.prototype.formatMMDDYYYY = function(){
    return (this.getMonth() + 1) +
    "/" +  this.getDate() +
    "/" +  this.getFullYear();
  }
  Booking.associate = function(models) {
    // associations can be defined here
  };
  return Booking;
};