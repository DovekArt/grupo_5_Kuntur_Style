'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.User,{
        as : 'user',
        foreignKey : 'userId'
      });
      Cart.belongsTo(models.Product,{
        as : 'product',
        foreignKey : 'productId'
      });
      Cart.belongsTo(models.Order,{
        as : 'order',
        foreignKey : 'orderId'
      });
    }
  }
  Cart.init({
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    orderId : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};