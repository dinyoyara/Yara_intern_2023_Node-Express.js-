const { validationResult } = require('express-validator');

const { generateCryptedPassword, isValidPassword } = require('../helpers/bcrypt');
const { generateToken } = require('../helpers/token');

const User = require('../models/user');

const register = (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) return res.status(400).json({ errors: errors.errors });
    let user = User.build({
        name: req.body.name,
        email: req.body.email,
        role: req.body.role
    });
    generateCryptedPassword(req.body.password).then((crPass) => {
        user.password = crPass;
        user.save().then((user) => res.status(201).end(user.dataValues.id));
    });
};

const login = (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) return res.status(400).json({ errors: errors.errors });
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(async (userModel) => {
        if (!userModel) return res.status(404).end();
        isValidPassword(req.body.password, userModel.dataValues.password).then((valid) => {
            if (!valid) return res.status(401).end('wrong password');
            const token = generateToken({ role: userModel.dataValues.role });
            res.status(200).json({ token: token });
        });
    });
};

module.exports = {
    login,
    register
};
