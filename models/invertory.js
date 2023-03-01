const { DataTypes } = require('sequelize');

const sequelize = require('../db');
const Product = require('./product');
const Warehouse = require('./warehouse');

const Invertory = sequelize.define(
    'invertory',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        warehouseId: {
            type: DataTypes.UUID,
            references: {
                model: Warehouse,
                key: 'id'
            }
        },
        productsId: {
            type: DataTypes.UUID,
            references: {
                model: Product,
                key: 'id'
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: null
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
    {
        indexes: [
            {
                unique: true,
                fields: ['warehouseId', 'productsId']
            }
        ]
    }
);

module.exports = Invertory;
