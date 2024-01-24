'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category,{
        as : 'category',
        foreignKey : 'categoryId'
      });

      Product.hasMany(models.Image,{
        as : 'images',
        foreignKey : 'productId',
        onDelete: 'cascade'
      })
    }
  }
  Product.init({
    marca: DataTypes.STRING,
    nombre: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    descuento: DataTypes.INTEGER,
    codigo: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    descripcion: DataTypes.STRING(500),
    color: DataTypes.STRING,
    material: DataTypes.STRING,
    xs: DataTypes.INTEGER,
    s: DataTypes.INTEGER,
    m: DataTypes.INTEGER,
    l: DataTypes.INTEGER,
    xl: DataTypes.INTEGER,
    unico: DataTypes.INTEGER,
    activo: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Product',
    paranoid : true
  });
  return Product;
};