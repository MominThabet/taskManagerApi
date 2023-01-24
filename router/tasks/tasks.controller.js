function httpGetAllTasks(req, res) {
    res.json({
        message: 'get tasks',
    });
}

function httpPostTask(req, res) {
    res.json({
        message: 'post tasks',
    });
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
