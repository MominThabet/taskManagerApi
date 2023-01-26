const { response } = require('express');
const {
    addTask,
    deleteTask,
    existsTaskWithId,
    getAllTasks,
    getTaskById,
    patchTaskById,
} = require('../../model/tasks.model');

async function httpGetAllTasks(req, res) {
    const tasks = await getAllTasks(req, res);
    return res.status(200).json(tasks);
}

async function httpPostTask(req, res) {
    if (!req.body.name) {
        return res.status(404).json({ error: 'give valid task name' });
    }

    let newTask = await addTask({ name: req.body.name });

    return res.status(200).json(newTask);
}

async function httpGetTask(req, res) {
    const task = await getTaskById(req.params.id);
    return res.status(200).json(task);
}

async function httpPatchTask(req, res) {
    const taskId = req.params.id;
    const existsTask = await existsTaskWithId(taskId);
    if (!existsTask) {
        return res.status(400).json({
            error: 'Task not found',
        });
    }
    const newTask = { name: existsTask.name, completed: existsTask.completed };
    newTask.name = req.body.name ? req.body.name : existsTask.name;

    newTask.completed =
        req.body.completed !== existsTask.completed
            ? req.body.completed
            : existsTask.completed;
    // const newTask = { name: req.body.name, completed: req.body.completed };

    const patchedTask = await patchTaskById(taskId, newTask);
    if (!patchedTask) {
        return res.status(400).json({ error: 'task not patched' });
    }
    let patched = await getTaskById(taskId);
    return res.status(200).json(patched);
}

async function httpDeleteTask(req, res) {
    const taskId = req.params.id;
    const existsTask = await existsTaskWithId(taskId);
    if (!existsTask) {
        return res.status(400).json({
            error: 'Task not found',
        });
    }
    const taskDeleted = await deleteTask(taskId);
    if (!taskDeleted) {
        return res.status(400).json({ error: 'task not Deleted' });
    }
    return res.status(200).json({ ok: true });
}

module.exports = {
    httpGetAllTasks,
    httpPostTask,
    httpGetTask,
    httpPatchTask,
    httpDeleteTask,
};
