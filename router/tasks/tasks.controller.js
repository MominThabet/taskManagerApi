const { addTask } = require('../../model/tasks.model');

function httpGetAllTasks(req, res) {
    res.json({
        message: 'get tasks',
    });
}

async function httpPostTask(req, res) {
    if (!req.body.name) {
        return res.status(404).json({ error: 'give valid task name' });
    }

    await addTask({ name: req.body.name });
    return res.status(200).json({ msg: 'saved successfully' });
}

function httpGetTask(req, res) {
    res.json({
        message: `get task ${req.params.id}`,
    });
}

function httpPatchTask(req, res) {
    res.json({
        message: `patch task ${req.params.id}`,
    });
}

function httpDeleteTask(req, res) {
    res.json({
        message: `delete task ${req.params.id}`,
    });
}

module.exports = {
    httpGetAllTasks,
    httpPostTask,
    httpGetTask,
    httpPatchTask,
    httpDeleteTask,
};
