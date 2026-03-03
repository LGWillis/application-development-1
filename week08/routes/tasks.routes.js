const express = require('express');
const validateTask = require('../middleware/validateTask');
const apiKey = require('../middleware/apiKey');
const asyncHandler = require("../middleware/asyncHandler");
const tasksController = require('../controllers/tasks.controller');
const router = express.Router();


router.get('/', asyncHandler(tasksController.getAllTasks));
router.get('/:id', asyncHandler(tasksController.getTaskById));
router.post('/', apiKey, validateTask, asyncHandler(tasksController.createTask));
router.patch('/:id', apiKey, validateTask, asyncHandler(tasksController.updateTask));
router.delete('/:id', apiKey, asyncHandler(tasksController.deleteTask));

module.exports = router;
