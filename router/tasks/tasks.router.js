const express = require('express');

const {
    httpGetAllTasks,
    httpPostTask,
    httpGetTask,
    httpPatchTask,
    httpDeleteTask,
} = require('./tasks.controller');

const tasksRouter = express.Router();

tasksRouter.get('/', httpGetAllTasks);

tasksRouter.post('/', httpPostTask);

tasksRouter.get('/:id', httpGetTask);

tasksRouter.patch('/:id', httpPatchTask);

tasksRouter.delete('/:id', httpDeleteTask);

module.exports = tasksRouter;
