const express = require('express');
const bodyParser = require('body-parser');

const router = require('./routes/main');
const sequelize = require('./db');

const { Product, User } = require('./models');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
sequelize.sync({ alter: true });
app.listen(3000);
