const { DataTypes } = require('sequelize');

const sequelize = require('../db');

const Warehouse = sequelize.define('warehouse', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

module.exports = Warehouse;
