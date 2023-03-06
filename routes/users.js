const express = require('express');

const userController = require('../controllers/users');
const { forAdmin } = require('../middlewares/roles');

const router = express.Router();

router.get('/', userController.getAll);
router.get('/:id', userController.getOne);
router.delete('/:id', forAdmin, userController.deleteOne);

module.exports = router;
