"use strict";

const statuses = [
  {
    name: "pendiente",
    createdAt: new Date(),
  },
  {
    name: "cancelada",
    createdAt: new Date(),
  },
  {
    name: "finalizada",
    createdAt: new Date(),
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Statuses", statuses, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Statuses", null, {});
  },
  order: 4
};
