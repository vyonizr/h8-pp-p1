'use strict';
const bcrypt = require("bcryptjs")
const salt = bcrypt.genSaltSync(10);
// const fixNameCase = require("../helpers/fixNameCase")

module.exports = (sequelize, DataTypes) => {
  const Consumer = sequelize.define('Consumer', {
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
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
        isEmail: true
      }
    }
  }, {
    hooks: {
      beforeCreate(consumer, options) {
        consumer.password = bcrypt.hashSync(consumer.password, salt);
      }
    }
  });
  Consumer.associate = function(models) {
    // associations can be defined here
    Consumer.belongsToMany(models.Studio, {through: models.Booking})
  };
  return Consumer;
};