const express = require('express');

const productController = require('../controllers/products');
const { validateProduct, validateProductId } = require('../middlewares/validators');

const router = express.Router();

router.get('/', productController.getAll);
router.post('/', validateProduct, productController.create);
router.get('/:id', validateProductId, productController.getOne);
router.put('/:id', validateProductId, validateProduct, productController.update);
router.delete('/:id', validateProductId, productController.deleteOne);

module.exports = router;
