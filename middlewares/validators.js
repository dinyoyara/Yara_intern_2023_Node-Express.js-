const { body, param } = require('express-validator');

const Contractor = require('../models/contractor');
const Product = require('../models/product');

const validateProduct = [
    body('name').isLength({ min: 5 }).withMessage('minimum 5 characters required'),
    body('price').notEmpty().withMessage('null is not valid value'),
    body('contractorId')
        .isUUID()
        .withMessage('unvalid value')
        .bail()
        .custom(async (value) => {
            const contr = await Contractor.findOne({ where: { id: value } });
            if (!contr) throw new Error('unknown contractor');
        })
];
const validateProductId = [
    param('id')
        .isUUID()
        .withMessage('unvalid value')
        .bail()
        .custom(async (value) => {
            const prod = await Product.findOne({ where: { id: value } });
            if (!prod) throw new Error('unknown product');
        })
];

module.exports = {
    validateProduct,
    validateProductId
};
