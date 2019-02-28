'use strict';
const bcrypt = require("bcryptjs")
const fixNameCase = require("../helpers/fixNameCase")

module.exports = (sequelize, DataTypes) => {
  const Consumer = sequelize.define('Consumer', {
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        unique: true,
        isOneWord(value) {
          var regexp = /^\S*$/
          if(!regexp.test(value)) {
            throw new Error("Must not contain any spaces")
          }
        }
      }
    },
    full_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    password: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isEmail: true,
        unique: true
      }
    }
  }, {
    hooks: {
      beforeCreate(consumer, options) {
        consumer.full_name = fixNameCase(full_name)
        consumer.gender = consumer.gender.toLowerCase()
      }
    }
  });
  Consumer.associate = function(models) {
    // associations can be defined here
    Consumer.hasMany(models.Booking)
  };
  return Consumer;
};