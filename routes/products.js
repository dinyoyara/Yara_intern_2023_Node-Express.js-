const express = require('express');

const productController = require('../controllers/products');
const { forAdmin, forWriters } = require('../middlewares/roles');
const { validateProduct, validateProductId } = require('../middlewares/validators');

const router = express.Router();

router.get('/', productController.getAll);
router.post('/', forAdmin, validateProduct, productController.create);
router.get('/:id', validateProductId, productController.getOne);
router.put('/:id', forWriters, validateProductId, validateProduct, productController.update);
router.delete('/:id', forAdmin, validateProductId, productController.deleteOne);

module.exports = router;
