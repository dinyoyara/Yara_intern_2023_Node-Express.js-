const Product = require('../models/product');

const getAll = (req, res) => {
    Product.findAll({
        where: { deleted: false },
        attributes: ['id', 'name', 'price', 'contractorId']
    }).then((models) => res.end(JSON.stringify(models.map((p) => p.dataValues))));
};

const getOne = (req, res) => {
    const id = req.params.id;
    Product.findAll({
        where: { deleted: false, id: id },
        attributes: ['id', 'name', 'price', 'contractorId']
    }).then((models) => res.end(JSON.stringify(models.map((p) => p.dataValues))));
};

const create = (req, res) => {
    Product.create({
        name: req.body.name,
        price: req.body.price,
        contractorId: req.body.contractorId
    }).then((pr) => res.status(201).end(pr.dataValues.id));
};

const update = (req, res) => {
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
    const id = req.params.id;
    Product.destroy({
        where: { id: id }
    }).then(() => res.status(200).end());
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    deleteOne
};
