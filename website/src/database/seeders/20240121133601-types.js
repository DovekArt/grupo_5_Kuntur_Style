"use strict";

const types = [
  {
    name: "particular",
    createdAt: new Date(),
  },
  {
    name: "laboral",
    createdAt: new Date(),
  },
  {
    name: "legal",
    createdAt: new Date(),
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Types", types, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Types", null, {});
  },
  order: 5
};
