"use strict";
const categories = [
  {
    name: "Remera",
    createdAt: new Date(),
  },
  {
    name: "Pantalon",
    createdAt: new Date(),
  },
  {
    name: "Gorra",
    createdAt: new Date(),
  },
  {
    name: "Buzo",
    createdAt: new Date(),
  },
  {
    name: "Campera",
    createdAt: new Date(),
  },
  {
    name: "Shorts",
    createdAt: new Date(),
  },
  {
    name: "Mujeres",
    createdAt: new Date(),
  },
  {
    name: "Hombres",
    createdAt: new Date(),
  },
  {
    name: "Niños",
    createdAt: new Date(),
  },
  {
    name: "Nuevos",
    createdAt: new Date(),
  },
];
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Categories", categories, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
  order: 1
};