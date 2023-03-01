const { Sequelize } = require('sequelize');

const sequelize = require('../db');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    vat: {
        type: Sequelize.STRING,
        unique: true
    }
});
module.exports = User;
