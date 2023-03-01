const contractorSeeder = require('./contractor');
const warehouseSeeder = require('./warehouse');
const productSeeder = require('./products');

module.exports = async () => {
    await contractorSeeder(5);
    await warehouseSeeder(3);
    await productSeeder(15);
};
