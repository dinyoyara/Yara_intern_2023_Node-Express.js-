const express = require('express');
const bodyParser = require('body-parser');

// const sequelize = require('./db');
// const { Contractor, Product, Warehouse, Invertory, Transfer, User } = require('./models');
// const seed = require('./seeders');
const setHeaders = require('./middlewares/setHeader');

const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const productsRoutes = require('./routes/products');

const app = express();

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(setHeaders);
app.use('/products', productsRoutes);
app.use('/users', userRoutes);
app.use('/auth', authRoutes);

// sequelize.sync().then(async () => {
//     await seed();
// });

app.listen(3000);
