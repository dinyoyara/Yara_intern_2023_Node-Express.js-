const { DataTypes } = require('sequelize');

const sequelize = require('../db');

const User = sequelize.define('user', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

module.exports = User;
