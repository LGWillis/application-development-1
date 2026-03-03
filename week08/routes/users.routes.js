const express = require('express');
const validateUser = require('../middleware/validateUser');
const asyncHandler = require("../middleware/asyncHandler");
const usersController = require('../controllers/users.controller');
const router = express.Router();

router.get('/', asyncHandler(usersController.getAllUsers));
router.get('/:id', asyncHandler(usersController.getUserById));
router.post('/', validateUser, asyncHandler(usersController.createUser));
router.patch('/:id', validateUser, asyncHandler(usersController.updateUser));
router.delete('/:id', asyncHandler(usersController.deleteUser));

module.exports = router;
