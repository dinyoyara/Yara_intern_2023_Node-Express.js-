'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, dataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Product.init(
        {
            id: {
                type: dataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            name: {
                type: dataTypes.STRING,
                allowNull: false
            },
            desc: dataTypes.STRING,
            imgUrl: dataTypes.STRING
        },
        {
            sequelize,
            modelName: 'Product'
        }
    );
    return Product;
};
