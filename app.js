const express = require('express');
const bodyParser = require('body-parser');

const router = require('./routes/main');
const db = require('./sequelize/models/index.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
db.sequelize.sync().then();
app.listen(3000);
