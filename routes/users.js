const express = require('express');

const userController = require('../controllers/users');
//const { validateProduct, validateProductId } = require('../middlewares/validators');

const router = express.Router();

router.get('/', userController.getAll);
router.post('/', userController.create);
router.get('/:id', userController.getOne);
//router.put('/:id', validateProductId, validateProduct, productController.update);
//router.delete('/:id', validateProductId, productController.deleteOne);

module.exports = router;
