const express = require('express');

const userController = require('../controllers/users');
const { validateUserId } = require('../middlewares/validators');
const { forAdmin } = require('../middlewares/roles');

const router = express.Router();

router.get('/', userController.getAll);
router.get('/:id', validateUserId, userController.getOne);
router.delete('/:id', forAdmin, validateUserId, userController.deleteOne);

module.exports = router;
