const express = require('express');
const bodyParser = require('body-parser');

const router = require('./routes/main');
const sequelize = require('./db');

const { Contractor, Product, Warehouse, Invertory, Transfer, User } = require('./models');
const seeder = require('./seeders');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

sequelize.sync();
seeder().then();

app.listen(3000);
