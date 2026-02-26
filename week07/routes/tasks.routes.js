const express = require('express');
const validateTask = require('../middleware/validateTask');
const apiKey = require('../middleware/apiKey');
const router = express.Router();
const tasksController = require('../controllers/tasks.controller');

router.get('/', tasksController.getAllTasks);
router.get('/:id', tasksController.getTaskById);
router.post('/', apiKey, validateTask, tasksController.createTask);
router.patch('/:id', apiKey, validateTask, tasksController.updateTask);
router.delete('/:id', apiKey, tasksController.deleteTask);

module.exports = router;
