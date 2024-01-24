'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Address.belongsTo(models.Type,{
        as : 'type',
        foreignKey : 'typeId'
      });
    }
  }
  Address.init({
    domicilio: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    codigo_postal: DataTypes.STRING,
    userId : DataTypes.INTEGER,
    typeId : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};