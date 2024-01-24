'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      domicilio: {
        type: Sequelize.STRING
      },
      ciudad: {
        type: Sequelize.STRING
      },
      codigo_postal: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Users'
          },
          key : 'id'
        },
        onDelete: 'cascade'
      },
      typeId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Types'
          },
          key : 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Addresses');
  }
};