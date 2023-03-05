const Product = require('./product');
const User = require('./user');
const Contractor = require('./contractor');
const Warehouse = require('./warehouse');
const Invertory = require('./invertory');
const Transfer = require('./transfer');

Contractor.hasMany(Product);
Product.belongsTo(Contractor);

Product.hasMany(Invertory);
Invertory.belongsTo(Product);

module.export = {
    Product: Product,
    User: User,
    Contractor: Contractor,
    Warehouse,
    Invertory: Invertory,
    Transfer
};
