'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsTo(models.Manufacturer);
      models.Manufacturer.hasMany(Item);
    }
  }
  Item.init({
    part_number: DataTypes.STRING,
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    ManufacturerId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Manufacturers",
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};