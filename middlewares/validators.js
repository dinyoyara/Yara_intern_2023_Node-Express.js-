const { body, param } = require('express-validator');

const Contractor = require('../models/contractor');
const User = require('../models/user');

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

// const validateProductId = [
//     param('id')
//         .isUUID()
//         .withMessage('unvalid value')
//         .bail()
//         .custom(async (value) => {
//             const prod = await Product.findOne({ where: { id: value } });
//             if (!prod) throw new Error('unknown product');
//         })
// ];

// const validateUserId = [
//     param('id')
//         .isUUID()
//         .withMessage('unvalid value')
//         .bail()
//         .custom(async (value) => {
//             const prod = await User.findOne({ where: { id: value } });
//             if (!prod) throw new Error('unknown user');
//         })
// ];

const validateUserForRegister = [
    body('name').isLength({ min: 5 }).withMessage('minimum 5 characters required'),
    body('password').isLength({ min: 5 }).withMessage('minimum 5 characters required'),
    body('email')
        .isEmail()
        .withMessage('invalid email')
        .bail()
        .custom(async (value) => {
            const user = await User.findOne({ where: { email: value } });
            if (user) throw new Error('email is in use');
        })
];

const validateUserForLogin = [
    body('password').isLength({ min: 5 }).withMessage('minimum 5 characters required'),
    body('email').isEmail().withMessage('invalid email')
    // .bail()
    // .custom(async (value) => {
    //     const user = await User.findOne({ where: { email: value } });
    //     if (!user) throw new Error('unknown email');
    // })
];

module.exports = {
    validateProduct,
    // validateProductId,
    // validateUserId,
    validateUserForRegister,
    validateUserForLogin
};
