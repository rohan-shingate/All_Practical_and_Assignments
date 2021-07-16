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
   await queryInterface.bulkInsert('Bikes',[
     {name:"Avenger 160",brand:"Bajaj",createdAt:new Date(),updatedAt:new Date()},
     {name:"HD",brand:"HD",createdAt:new Date(),updatedAt:new Date()},
     {name:"Activa",brand:"Hero",createdAt:new Date(),updatedAt:new Date()},
     {name:"Pulsar",brand:"Hero",createdAt:new Date(),updatedAt:new Date()},
     {name:"Karisma",brand:"Bajaj",createdAt:new Date(),updatedAt:new Date()},
    ]);
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
