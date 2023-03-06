const express = require('express');

// const sequelize = require('./db');
// const seed = require('./seeders');
const { Contractor, Product, Warehouse, Invertory, Transfer, User } = require('./models');

const setHeaders = require('./middlewares/setHeader');
const checkAuhtorization = require('./middlewares/auth');

const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const productsRoutes = require('./routes/products');

const app = express();

app.use(express.json());
app.use(setHeaders);
app.use('/auth', authRoutes);
app.use('/products', checkAuhtorization, productsRoutes);
app.use('/users', checkAuhtorization, userRoutes);

// sequelize.sync().then(async () => {
//     await seed();
// });

app.listen(3000);
