const { DataTypes } = require('sequelize');

const sequelize = require('../db');
const Contractor = require('./contractor');

const Product = sequelize.define('product', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    contractorId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Contractor,
            key: 'id'
        }
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

module.exports = Product;
