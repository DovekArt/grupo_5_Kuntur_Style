"use strict";

const addresses = [
  {
    domicilio: "Calle Principal 123",
    ciudad: "Buenos Aires",
    codigo_postal: "C1000",
    userId: 1,
    typeId: 1,
    createdAt: new Date(),
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Addresses", addresses, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Addresses", null, {});
  },
  order: 8
};