const Contractor = require('../models/contractor');

module.exports = async (count) => {
    if ((await Contractor.findAndCountAll()).count > 0) return;
    for (let i = 0; i < count; i++) {
        await Contractor.create({
            name: 'contr_10' + i,
            email: 10120 + i + '@abc.bca',
            vat: 'BG' + (1005520025 + i)
        });
    }
};
