const express = require('express');

const productController = require('../controllers/products');
const { forAdmin, forWriters } = require('../middlewares/roles');
const { validateProduct, validateProductId } = require('../middlewares/validators');

const router = express.Router();

router.get('/', productController.getAll);
router.post('/', forWriters, validateProduct, productController.create);
router.get('/:id', productController.getOne);
router.put('/:id', forWriters, validateProduct, productController.update);
router.delete('/:id', forAdmin, productController.deleteOne);

module.exports = router;
