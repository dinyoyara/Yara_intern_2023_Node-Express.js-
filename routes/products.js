const express = require('express');

const productController = require('../controllers/products');

const router = express.Router();

router.get('/', productController.getAll);
router.post('/', productController.create);
router.get('/:id', productController.getOne);

module.exports = router;
