'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      marca: {
        type: Sequelize.STRING,
        allowNull : false
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull : false
      },
      precio: {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      descuento: {
        type: Sequelize.INTEGER,
        defaultValue : 0
      },
      codigo: {
        type: Sequelize.STRING,
        allowNull : false,
        unique : true
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull : false,
        references : {
          model : {
            tableName : 'Categories'
          },
          key : 'id'
        }
      },
      descripcion: {
        type: Sequelize.STRING,
        allowNull : false
      },
      color: {
        type: Sequelize.STRING,
        allowNull : false
      },
      material: {
        type: Sequelize.STRING,
        allowNull : false
      },
      xs: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      s: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      m: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      l: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      xl: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      unico: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      activo: {
        type: Sequelize.BOOLEAN,
        defaultValue : true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};