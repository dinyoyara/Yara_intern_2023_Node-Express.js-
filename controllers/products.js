const { validationResult } = require('express-validator');
const Contractor = require('../models/contractor');
const Invertory = require('../models/invertory');

const Product = require('../models/product');

const getAll = (req, res) => {
    Product.findAll({
        where: { deleted: false },
        attributes: ['id', 'name', 'price', 'contractorId']
    }).then((models) => res.json(models.map((p) => p.dataValues)));
};

const getOne = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.errors });
    const id = req.params.id;
    Product.findAll({
        where: { deleted: false, id: id },
        attributes: ['id', 'name', 'price'],
        include: {
            model: Contractor,
            attributes: ['name', 'vat', 'email']
        }
        // include: {
        //     model: Invertory,
        //     attributes: ['quantity']
        // }
    }).then((models) => res.json(models.map((p) => p.dataValues)));
};

const create = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.errors });
    Product.create({
        name: req.body.name,
        price: req.body.price,
        contractorId: req.body.contractorId
    }).then((model) => res.status(201).json(model.dataValues.id));
};

const update = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.errors });
    const id = req.params.id;
    Product.update(
        {
            name: req.body.name,
            price: req.body.price,
            contractorId: req.body.contractorId
        },
        {
            where: { id: id }
        }
    ).then(() => res.status(204).end());
};

const deleteOne = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.errors });
    const id = req.params.id;
    Product.destroy({
        where: { id: id }
    }).then(() => res.status(204).end());
};

module.exports = {
    getAll,
    getOne,
    update,
    deleteOne,
    create
};
