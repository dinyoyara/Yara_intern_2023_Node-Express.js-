const { validationResult } = require('express-validator');
const User = require('../models/user');

const getAll = (req, res) => {
    User.findAll({
        where: { deleted: false },
        attributes: ['id', 'name', 'email', 'role']
    }).then((models) => res.json(models.map((p) => p.dataValues)));
};

const getOne = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.errors });
    const id = req.params.id;
    User.findAll({
        where: { deleted: false, id: id },
        attributes: ['id', 'name', 'email', 'role']
    }).then((models) => res.json(models.map((p) => p.dataValues)));
};

const create = (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) return res.status(400).json({ errors: errors.errors });
    let user = User.build({
        name: req.body.name,
        email: req.body.email,
        role: req.body.role
    });
    user.generateHash(req.body.password).then((pass) => {
        user.password = pass;
        user.save().then((user) => res.status(201).end(user.dataValues.id));
    });
};

module.exports = {
    getAll,
    getOne,
    create
};
