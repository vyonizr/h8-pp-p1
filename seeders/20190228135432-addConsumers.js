'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Consumers', [{
     username : "jsExpert",
     full_name : "Wika Silo",
     password : "wika1234",
     email : "wika@gmail.com",
     createdAt : new Date(),
     updatedAt : new Date()
   }, {
    username : "validator",
    full_name : "Ramadiansyah",
    password : "rama1234",
    email : "rama@gmail.com",
    createdAt : new Date(),
    updatedAt : new Date()
  }, {
    username : "reyszer",
    full_name : "Reyhan Huditama",
    password : "8nfhn90",
    email : "reyhan@gmail.com",
    createdAt : new Date(),
    updatedAt : new Date()
  }, {
    username : "vyonizr",
    full_name : "Fitrahtur Rahman",
    password : "12345",
    email : "afit@gmail.com",
    createdAt : new Date(),
    updatedAt : new Date()
  }, {
    username : "ypmzzz",
    full_name : "Yoga Permana",
    password : "yoga1234",
    email : "yoga@gmail.com",
    createdAt : new Date(),
    updatedAt : new Date()
  }])
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Consumers', null)
  }
};
