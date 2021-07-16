'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     await queryInterface.bulkInsert('Products', [
       {
        productName: "Iphone 12",
        productDescription:"This is the latest launched Iphone in 2021.",
        productPrice:120000.00
       },
       {
        productName: "Iphone 11",
        productDescription:"This is the latest launched Iphone in 2020.",
        productPrice:100000.00
       },
       {
        productName: "Iphone X",
        productDescription:"This is the latest launched Iphone in 2019.",
        productPrice:80000.00
       }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
