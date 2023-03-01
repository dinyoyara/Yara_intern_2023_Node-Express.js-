const { DataTypes } = require('sequelize');

const sequelize = require('../db');

/**
 * @param {DataTypes} DataTypes;
 */

const Contractor = sequelize.define('contractor', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: DataTypes.STRING,
    vat: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

module.exports = Contractor;
