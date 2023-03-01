const Warehouse = require('../models/warehouse');

module.exports = async (count) => {
    if ((await Warehouse.findAndCountAll()).count > 0) return;
    for (let i = 0; i < count; i++) {
        await Warehouse.create({
            name: 'wh_4' + i,
            address: 'town_' + (9 - i) + ', str. ' + (121 + i)
        });
    }
};
