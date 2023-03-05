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

const deleteOne = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.errors });
    const id = req.params.id;
    User.destroy({
        where: { id: id }
    }).then(() => res.status(204).end());
};

module.exports = {
    getAll,
    getOne,
    deleteOne
};
