const contractorSeeder = require('./contractor');
const warehouseSeeder = require('./warehouse');
const productSeeder = require('./products');
const userSeeder = require('./user');

module.exports = async () => {
    await contractorSeeder(5);
    await warehouseSeeder(3);
    await productSeeder(15);
    await userSeeder(5);
};
