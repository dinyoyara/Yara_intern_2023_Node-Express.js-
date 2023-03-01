const { Sequelize } = require('sequelize');

const process = require('process');
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config.json');

const sequelize = new Sequelize(config[env]);

module.exports = sequelize;
