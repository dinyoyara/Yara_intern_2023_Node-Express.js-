const { DataTypes } = require('sequelize');

const sequelize = require('../db');
const Warehouse = require('./warehouse');
const Product = require('./product');

const Transfer = sequelize.define('transfer', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    productId: {
        type: DataTypes.UUID,
        references: {
            model: Product,
            key: 'id'
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    toWarehouseId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Warehouse,
            key: 'id'
        }
    },
    fromWarehouseId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Warehouse,
            key: 'id'
        }
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

module.exports = Transfer;
