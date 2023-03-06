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
    User.findOne({
        where: { deleted: false, id: id },
        attributes: ['id', 'name', 'email', 'role']
    }).then((models) => res.json(models.map((p) => p.dataValues)));
};

const deleteOne = (req, res) => {
    const id = req.params.id;
    User.update(
        {
            deleted: true
        },
        {
            where: { id: id }
        }
    ).then((user) => {
        if (!user) return res.status(404).end();
        res.status(204).json(user);
    });
};

module.exports = {
    getAll,
    getOne,
    deleteOne
};
