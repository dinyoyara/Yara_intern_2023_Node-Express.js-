const Contractor = require('../models/contractor');
const Invertory = require('../models/invertory');
const Product = require('../models/product');
const Warehouse = require('../models/warehouse');
const getRandom = require('../helpers');

module.exports = async (count) => {
    if ((await Product.findAndCountAll()).count > 0) return;
    const warehousesIdList = (await Warehouse.findAll({ where: { deleted: false }, attributes: ['id'] })).map(
        (x) => x.dataValues.id
    );
    const warehouseCount = warehousesIdList.length;

    const contractorsIdList = (await Contractor.findAll({ where: { deleted: false }, attributes: ['id'] })).map(
        (x) => x.dataValues.id
    );
    const contractorCount = contractorsIdList.length;

    for (let i = 0; i < count; i++) {
        let product = await Product.create({
            name: 'prod_34' + i,
            price: 10.99 + 7.5 * i,
            contractorId: contractorsIdList[getRandom(0, contractorCount)]
        });

        await Invertory.create({
            warehouseId: warehousesIdList[getRandom(0, warehouseCount)],
            productId: product.dataValues.id,
            quantity: getRandom(2, 13) * 50
        });
    }
};
