const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

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
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('admin', 'write', 'read'),
        defaultValue: 'read'
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

User.prototype.generateHash = async (password) => await bcrypt.hash(password, bcrypt.genSaltSync(8));
User.prototype.validPassword = async (password) => await bcrypt.compare(password, this.password);

module.exports = User;
