const contractorSeeder = require('./contractor');
const warehouseSeeder = require('./warehouse');

module.exports = async () => {
    await contractorSeeder(10);
    await warehouseSeeder(4);
};
