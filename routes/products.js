const express = require('express');

const productController = require('../controllers/products');

const router = express.Router();

router.get('/', productController.getAll);
router.post('/', productController.create);
router.get('/:id', productController.getOne);
router.put('/:id', productController.update);
router.delete('/:id', productController.deleteOne);

module.exports = router;
