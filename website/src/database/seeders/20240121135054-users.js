"use strict";
const bcryptjs = require('bcryptjs');

const users = [
  {
    nombre: "admin",
    apellido: "admin",
    email: "admin@gmail.com",
    password: bcryptjs.hashSync("admin123",10),
    telefono: "",
    rolId: 1,
    createdAt: new Date(),
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
  order: 7
};
